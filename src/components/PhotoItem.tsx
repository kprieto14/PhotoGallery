import React from "react";
import { PhotoItemType } from "../App";
import { Link } from "react-router-dom";

export function PhotoItem(props: PhotoItemType) {
    return (
        <article className='photo-item'>
            <Link to={`/${props.category}/${props.title}`}><img src={props.imageURL} alt={props.title} /></Link>
            <Link to={`/${props.category}/${props.title}`}><p>{props.title}</p></Link>
        </article>
    )
}