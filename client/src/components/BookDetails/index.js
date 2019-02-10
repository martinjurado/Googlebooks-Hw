import React from "react";



// // RecipeList renders a bootstrap list item
// export function BookList({ children }) {
//     return <ul className="list-group">{children}</ul>;
// }

const BookItems = (props) => {
    
    return (
        <div className="text-center">
            <img alt={props.title} src={props.thumbnail} />
            <h4>{props.title}</h4>
            <h6>{props.authors}</h6>
            <p>{props.description}</p>
            <a href={props.href} target="_blank" rel="noopener noreferrer">Go to Book</a>
            <br></br>
        </div>
    )
}

export default BookItems;
