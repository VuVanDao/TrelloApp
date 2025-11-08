import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ListColumns from "../ListColumns/ListColumns";
import { mapOrder } from "~/utils/sort";
import {
  closestCorners,
  defaultDropAnimationSideEffects,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { ACTIVE_DRAG_ITEM_TYPE } from "~/utils/constant";
import Column from "../Column/Column";
import TrelloCard from "../TrelloCard/TrelloCard";
import { cloneDeep } from "lodash";

const BoardContent = ({ board }) => {
  const [orderedColumns, setOrderedColumns] = useState([]);
  const [activeDragItemId, setActiveDragItemId] = useState(null);
  const [activeDragItemType, setActiveDragItemType] = useState(null);
  const [activeDragItemData, setActiveDragItemData] = useState(null);
  const [OldColumnWhenDraggingCard, setOldColumnWhenDraggingCard] =
    useState(null);
  // khi bắt đầu thao tác
  const handleDragStart = (event) => {
    // console.log("🚀 ~ handleDragStart ~ event:", event);
    const { active } = event;
    setActiveDragItemId(active?.id);
    setActiveDragItemType(
      active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN
    );
    setActiveDragItemData(active?.data?.current);
    // nếu là kéo card thì mới set oldColumn
    if (active?.data?.current?.columnId) {
      setOldColumnWhenDraggingCard(findColumnByCardId(active?.id));
    }
  };
  // sau khi thao tác xong
  const handleDragEnd = (event) => {
    // console.log("🚀 ~ handleDragEnd ~ event:", event);
    const { active, over } = event;
    if (!active || !over) return;
    // xử lí khi card
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      // card đang kéo
      const {
        id: ActiveDraggingCardId,
        data: { current: ActiveDraggingCardData },
      } = active;
      // card sẽ thay thế
      const {
        id: OverDraggingCardId,
        data: { current: OverDraggingCardData },
      } = over;
      // tìm 2 column theo cardId
      const columnActive = findColumnByCardId(ActiveDraggingCardId);
      const columnOver = findColumnByCardId(OverDraggingCardId);
      if (!OldColumnWhenDraggingCard || !columnOver) {
        return;
      }
      // xử lí khi kéo thả card cùng 1 column
      if (OldColumnWhenDraggingCard._id === columnOver._id) {
        const oldCardIndex = OldColumnWhenDraggingCard?.cards?.findIndex(
          (card) => card._id === activeDragItemId
        );
        const newCardIndex = columnOver?.cards?.findIndex(
          (card) => card._id === OverDraggingCardId
        );
        const orderedCardColumn = arrayMove(
          OldColumnWhenDraggingCard?.cards,
          oldCardIndex,
          newCardIndex
        );
        setOrderedColumns((prev) => {
          const columnHaveCardsChange = cloneDeep(prev);
          // tìm column mà card đang kéo thả
          const targetColumn = columnHaveCardsChange.find(
            (column) => column._id === columnOver._id
          );
          targetColumn.cards = orderedCardColumn;
          targetColumn.cardOrderIds = orderedCardColumn.map((card) => card._id);
          return columnHaveCardsChange;
        });
      } else {
        setOrderedColumns((prevColumns) => {
          const overCardIndex = columnOver?.cards?.findIndex(
            (card) => card?._id === OverDraggingCardId
          );
          // logic tính toán "card index mới" chôm đc từ thư viện của dnd kit
          const isBelowOverItem =
            active.rect.current.translated &&
            active.rect.current.translated.top >
              over.rect.top + over.rect.height;
          // console.log("🚀 ~ handleDragEnd ~ isBelowOverItem:", isBelowOverItem);
          const modifier = isBelowOverItem ? 1 : 0;
          const newCardIndex =
            overCardIndex >= 0
              ? overCardIndex + modifier
              : columnOver?.cards.length + 1;

          // clone mảng OrderedColumnsState cũ ra 1 cái mới để xử lí data rồi return - cập nhật lại OrderedColumnState mới
          const nextColumn = cloneDeep(prevColumns);
          const nextActiveColumn = nextColumn.find((column) => {
            return column._id === OldColumnWhenDraggingCard._id;
          });
          const nextOverColumn = nextColumn.find((column) => {
            return column._id === columnOver._id;
          });
          if (nextActiveColumn) {
            // xoá card đang active ở mảng cũ
            nextActiveColumn.cards = nextActiveColumn.cards.filter(
              (card) => card?._id !== ActiveDraggingCardId
            );
            nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
              (card) => card._id
            );
          }
          if (nextOverColumn) {
            // kiểm tra xem ActiveDraggingCardId đã có trong nextOverColumn.cards chưa, nếu có thì xoá
            nextOverColumn.cards = nextOverColumn.cards.filter(
              (card) => card?._id !== ActiveDraggingCardId
            );
            // thêm ActiveDraggingCardId vào nextOverColumn.cards với index mới
            nextOverColumn.cards = nextOverColumn.cards.toSpliced(
              newCardIndex,
              0,
              ActiveDraggingCardData
            );
            nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
              (card) => card._id
            );
          }
          return nextColumn;
        });
      }
    }
    // xử lí khi column
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      if (active.id !== over.id) {
        const oldIndex = orderedColumns.findIndex(
          (column) => column._id === active.id
        );
        const newIndex = orderedColumns.findIndex(
          (column) => column._id === over.id
        );
        setOrderedColumns(arrayMove(orderedColumns, oldIndex, newIndex));
      }
    }
    setActiveDragItemId(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
    setOldColumnWhenDraggingCard(null);
  };
  //khi đang thao tác
  const handleDragOver = (event) => {
    // console.log("🚀 ~ handleDragOver ~ event:", event);
    const { active, over } = event;
    if (!active || !over) {
      return;
    }
    // không cần làm gì vì column đã ok
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      return;
    }
    // card đang kéo
    const {
      id: ActiveDraggingCardId,
      data: { current: ActiveDraggingCardData },
    } = active;
    // card sẽ thay thế
    const {
      id: OverDraggingCardId,
      data: { current: OverDraggingCardData },
    } = over;
    // tìm 2 column theo cardId
    const columnActive = findColumnByCardId(ActiveDraggingCardId);
    const columnOver = findColumnByCardId(OverDraggingCardId);
    if (!columnActive || !columnOver) {
      return;
    }
    if (columnActive?._id !== columnOver?._id) {
      setOrderedColumns((prevColumns) => {
        const overCardIndex = columnOver?.cards?.findIndex(
          (card) => card?._id === OverDraggingCardId
        );
        // logic tính toán "card index mới" chôm đc từ thư viện của dnd kit
        const isBelowOverItem =
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height;
        // console.log("isBelowOverItem", isBelowOverItem);
        const modifier = isBelowOverItem ? 1 : 0;
        const newCardIndex =
          overCardIndex >= 0
            ? overCardIndex + modifier
            : columnOver?.cards?.length + 1;
        // clone mảng OrderedColumnsState cũ ra 1 cái mới để xử lí data rồi return - cập nhật lại OrderedColumnState mới
        const nextColumn = cloneDeep(prevColumns);
        const nextActiveColumn = nextColumn.find(
          (column) => column._id === columnActive._id
        );
        const nextOverColumn = nextColumn.find(
          (column) => column._id === columnOver._id
        );
        if (nextActiveColumn) {
          // xoá card đang active ở mảng cũ
          nextActiveColumn.cards = nextActiveColumn.cards.filter(
            (card) => card?._id !== ActiveDraggingCardId
          );
          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
            (card) => card._id
          );
        }
        if (nextOverColumn) {
          // kiểm tra xem ActiveDraggingCardId đã có trong nextOverColumn.cards chưa, nếu có thì xoá
          nextOverColumn.cards = nextOverColumn.cards.filter(
            (card) => card?._id !== ActiveDraggingCardId
          );
          // thêm ActiveDraggingCardId vào nextOverColumn.cards với index mới
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(
            newCardIndex,
            0,
            ActiveDraggingCardData
          );
          nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
            (card) => card._id
          );
        }
        // console.log("🚀 ~ handleDragOver ~ nextOverColumn:", nextOverColumn);
        return nextColumn;
      });
    }
  };
  const findColumnByCardId = (cardId) => {
    return orderedColumns.find((Column) =>
      Column?.cards?.find((card) => card._id === cardId)
    );
  };
  // config cam bien
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
        delay: 250, //250ms
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        distance: 10,
        delay: 250, //250ms
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  // config dropAnimation
  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };
  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board.columnOrderIds, "_id"));
  }, [board]);
  return (
    <>
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        collisionDetection={closestCorners} // thuật toán phát hiệnva chạm
      >
        <Box
          sx={{
            height: (theme) =>
              `calc(100vh - ${theme.trelloCustom.header_height} - ${theme.trelloCustom.board_bar_height})`,
            backgroundColor: "board_content.main",
            display: "flex",
            gap: "15px",
            p: "15px",
            width: "100vw",
            overflowX: "scroll",
            overflowY: "unset",
          }}
        >
          <ListColumns columns={orderedColumns}></ListColumns>
          <DragOverlay dropAnimation={dropAnimation}>
            {!activeDragItemId && null}
            {activeDragItemId &&
            activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN ? (
              <Column column={activeDragItemData}>a</Column>
            ) : null}
            {activeDragItemId &&
            activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD ? (
              <TrelloCard card={activeDragItemData}>a</TrelloCard>
            ) : null}
          </DragOverlay>
        </Box>
      </DndContext>
    </>
  );
};

export default BoardContent;
