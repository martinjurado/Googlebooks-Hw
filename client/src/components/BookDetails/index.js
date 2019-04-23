import React from "react";

import "./style.css";

// // RecipeList renders a bootstrap list item
// export function BookList({ children }) {
//     return <ul className="list-group">{children}</ul>;
// }

function BookItems({ title, authors, link, description, image, Button }) {
  return (
    <div className="text-center containerapi">
      <img alt={title} src={image} className="apipic" />
      <h5>{title}</h5>
      <h6>By {authors}</h6>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        <button className="btn btn-info">Go to Book</button>
      </a>
      <Button />

      <p className="bookdesc">{description}</p>
      
      <br />
    </div>
  );
};

export default BookItems;
