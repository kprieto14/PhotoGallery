import React from 'react';
import { GalleryItemType } from '../App';

export function CategoryItem(props: GalleryItemType) {
    return (
        <article>
            <h2>{props.title}</h2>
            <h3>{props.description}</h3>
            <img src="" alt="" />
        </article>
    )
}