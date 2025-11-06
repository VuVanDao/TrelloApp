import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ButtonAddCol from "../ButtonAddCol/ButtonAddCol";
import ListColumns from "../ListColumns/ListColumns";
import { mapOrder } from "~/utils/sort";
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

const BoardContent = ({ board }) => {
  const [orderedColumns, setOrderedColumns] = useState([]);
  const handleDragEnd = (event) => {
    console.log("🚀 ~ handleDragEnd ~ event:", event);
    const { active, over } = event;
    if (!active || !over) return;
    if (active.id !== over.id) {
      const oldIndex = orderedColumns.findIndex(
        (column) => column._id === active.id
      );
      const newIndex = orderedColumns.findIndex(
        (column) => column._id === over.id
      );
      setOrderedColumns(arrayMove(orderedColumns, oldIndex, newIndex));
    }
  };
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
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
  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board.columnOrderIds, "_id"));
  }, [board]);
  return (
    <>
      <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
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
          <ButtonAddCol></ButtonAddCol>
        </Box>
      </DndContext>
    </>
  );
};

export default BoardContent;
