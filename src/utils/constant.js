export const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
  CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD",
};
export const generatePlaceholderCard = (column) => {
  return {
    boardId: column.boardId,
    columnId: column?._id,
    FE_placeholder_card: true,
    _id: `${column?._id}-placeholder-card`,
  };
};
export const apiBackend = "http://localhost:8080";
export const apiVersion = "v1";
