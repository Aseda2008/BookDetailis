import React from "react";
import { useParams } from "react-router-dom";

const BookDdetalis = () => {
  const { BookId } = useParams();
  console.log({ BookId }, "iuh");

  return (
    <div id="detalis">
      <div class="container">
        <div class="detalis">detalis</div>
      </div>
    </div>
  );
};

export default BookDdetalis;
