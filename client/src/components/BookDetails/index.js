import React from "react";



export function BookItems({
    // thumbnail,
    title,
    author,
    description,
}) {
    return(
        <div className="text-center">
            {/* <img alt={title} src={thumbnail} /> */}
            <h3>{title}</h3>
            <h4>{author}</h4>
            <p>{description}</p>
        </div>
    )
}
