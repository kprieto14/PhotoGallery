import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import gallery from '../gallery.json'
import { GalleryItemType } from "../App";

export function PhotoList() {
    const params = useParams<{ category:string }>()
    //const history = useNavigate()

    //Turns JSON object into an array to work with
    const entries = Object.entries(gallery)
    
    const [ categoryItem, setCategoryItem ] = useState<GalleryItemType>({
        category: '',
        title: '',
        description: '',
        photos: []
    })

    useEffect(function() {
        //Goes through the object array
        entries.forEach(function(key) {
            //Checks if the key is the category
            if( key.includes(String(params.category)) ) {
                //Always grab the actual object which is the 2nd in the array
                const entry = key[1];
                //Manually sets object so that it can be set as a GalleryItemType
                var foundCategory = {
                    category: String(params.category),
                    title: entry.title,
                    description: entry.description,
                    photos: entry.photos,
                }

                setCategoryItem(foundCategory)
            }
        })
    }, [])

    return (
        <>
            <h1>{categoryItem.title}</h1>
            <h2>{categoryItem.description}</h2>
        </>
    )
}