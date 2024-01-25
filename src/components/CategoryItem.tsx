import React from 'react';
import { GalleryItemType } from '../App';
import { Link } from 'react-router-dom';

export function CategoryItem(props: GalleryItemType) {
    const photoEntries = Object.entries(props.photos)
    //Looks at the first object in the photoEntries array which returns 2 items as an array
    const firstObject = photoEntries[0]
    //Accesses the first actual photo in the array from before, if at 0 will return the object index in array
    const firstPhoto = firstObject[1] 

    return (
        <article>
            <header>
                <Link to={`/${props.category}`}><button><h2>{props.title}</h2></button></Link>
                <h3>{props.description}</h3>
            </header>

            <img src={firstPhoto.imageURL} alt={firstPhoto.title} />
            
        </article>
    )
}