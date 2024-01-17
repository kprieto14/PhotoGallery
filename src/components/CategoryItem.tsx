import React from 'react';
import { GalleryItemType } from '../App';

export function CategoryItem(props: GalleryItemType) {
    const photoEntries = Object.entries(props.photos)
    //Looks at the first object in the photoEntries array which returns 2 items as an array
    const firstObject = photoEntries[0]
    //Accesses the first actual photo in the array from before, if at 0 will return the object index in array
    const firstPhoto = firstObject[1] 

    return (
        <article>
            <h2>{props.title}</h2>
            <h3>{props.description}</h3>
            <img src={firstPhoto.imageURL} alt={firstPhoto.title} />
            
        </article>
    )
}