import React from "react";
import { PhotoItemType } from "../App";

export function PhotoItem(props: PhotoItemType) {
    return (
        <article className='photo-item'>
            <img src={props.imageURL} alt={props.title} />
            <p>{props.title}</p>
        </article>
    )
}