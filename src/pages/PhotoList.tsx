import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import gallery from '../gallery.json'
import { GalleryItemType } from "../App";
import { PhotoItem } from "../components/PhotoItem";

export function PhotoList() {
    const params = useParams<{ category:string }>()
    
    const [ categoryItem, setCategoryItem ] = useState<GalleryItemType>({
        category: '',
        title: '',
        description: '',
        photos: []
    })

    useEffect(function() {
        //Turns JSON object into an array to work with
        const entries = Object.entries(gallery)
        //Goes through the object array
        entries.forEach(function(key) {
            //Always grab the actual object which is the 2nd in the array
            const entry = key[1];
            //Checks if the key is the category
            if( key.includes( String(params.category) )) {
                //Manually sets object so that it can be set as a GalleryItemType
                const foundCategory = {
                    category: String(params.category),
                    title: entry.title,
                    description: entry.description,
                    photos: entry.photos,
                }

                setCategoryItem(foundCategory)
            }
        })
    }, [params.category])

    return (
        <div className='photo-list'>
            <h2>{categoryItem.title}</h2>
            <h3>{categoryItem.description}</h3>

            <section>
                {categoryItem.photos.map((key) => (
                        <PhotoItem
                            key={key.title}
                            category={categoryItem.category}
                            title={key.title}
                            imageURL={key.imageURL}
                            sourceURL={key.sourceURL}
                        />
                ))}
            </section>
        </div>
    )
}