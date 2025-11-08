import React from "react";
import TrelloCard from "../TrelloCard/TrelloCard";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const ListTrelloCards = ({ cards }) => {
  return (
    <>
      <SortableContext
        items={cards.map((card) => card._id)}
        strategy={verticalListSortingStrategy}
      >
        {cards.map((card) => (
          <TrelloCard key={card._id} card={card}></TrelloCard>
        ))}
      </SortableContext>
    </>
  );
};

export default ListTrelloCards;
