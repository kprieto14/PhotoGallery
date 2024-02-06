import React from "react";
import { PhotoItemType } from "../App";

export function PhotoItem(props: PhotoItemType) {
    console.log(props.title)

    return (
        <article>
            <p>{props.title}</p>
            <img src={props.imageURL} alt={props.title} />
        </article>
    )
}