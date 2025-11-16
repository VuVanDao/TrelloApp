import React from "react";
import Column from "../Column/Column";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import ButtonAddCol from "../ButtonAddCol/ButtonAddCol";

const ListColumns = ({ columns, handleGetBoardDetail }) => {
  return (
    <>
      <SortableContext
        items={columns?.map((column) => column?._id)}
        strategy={horizontalListSortingStrategy}
      >
        {columns?.map((column) => (
          <Column
            key={column?._id}
            column={column}
            handleGetBoardDetail={handleGetBoardDetail}
          ></Column>
        ))}
        <ButtonAddCol
          handleGetBoardDetail={handleGetBoardDetail}
        ></ButtonAddCol>
      </SortableContext>
    </>
  );
};

export default ListColumns;
