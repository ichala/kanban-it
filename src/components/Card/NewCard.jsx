import React from 'react';
import { Link } from 'react-router-dom';

const NewCard = ({ id }) => (
  <Link to={`/${id}/new`}>
    <div
      className="relative flex flex-col text-primary/30 hover:text-primary/100  items-center outline outline-dashed p-4 mt-3 rounded-lg cursor-pointer"
    >
      <h2 className="text-md font-bold text-center ">New Card</h2>
    </div>
  </Link>
);

export default NewCard;
