import React from 'react';
import CardDetails from '../CardData';

function CardInfo({ data }) {
  return (
    <>
      {data.map((items) => {
        return <CardDetails {...items} />;
      })}
    </>
  );
}

export default CardInfo;
