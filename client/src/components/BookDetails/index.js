import React from "react";

import "./style.css"


// // RecipeList renders a bootstrap list item
// export function BookList({ children }) {
//     return <ul className="list-group">{children}</ul>;
// }

const BookItems = (props) => {
    
    return (
        <div className="text-center containerapi">
            <img alt={props.title} src={props.thumbnail} className="apipic" />
            <h5>{props.title}</h5>
            <h6>{props.authors}</h6>
            <p className="bookdesc">{props.description}</p>
            <a href={props.href} target="_blank" rel="noopener noreferrer" className="link"><button class="btn btn-secondary">Go to Book</button></a>
            <br></br>
        </div>
    )
}

export default BookItems;
