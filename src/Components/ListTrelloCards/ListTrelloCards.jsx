import React from "react";
import TrelloCard from "../TrelloCard/TrelloCard";

const ListTrelloCards = ({ cards }) => {
  return (
    <>
      {cards.map((card) => (
        <TrelloCard key={card._id} card={card}></TrelloCard>
      ))}
    </>
  );
};

export default ListTrelloCards;
