import React from "react";
import Column from "../Column/Column";

const ListColumns = ({ columns }) => {
  return (
    <>
      {columns.map((column) => (
        <Column key={column?._id} column={column}></Column>
      ))}
    </>
  );
};

export default ListColumns;
