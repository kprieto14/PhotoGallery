import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import gallery from '../gallery.json'

export function PhotoList() {
    const params = useParams<{ category:string }>()
    //const history = useNavigate()

    //Turns JSON object into an array to work with
    const entries = Object.entries(gallery)
    
    //Unfortunately have to set the type as any for now, using GalleryItemType will give errors later when mapping through objects
    const [ categoryItem, setCategoryItem ] = useState<any>({
        title: '',
        description: '',
        photos: ['']
    })

    useEffect(function() {
        //Goes through object array
        entries.forEach(function(key) {
            //Checks if the key is the category
            if( key.includes(String(params.category)) ) {
                //Always grab the actual object which is the 2nd in the array
                var entry = key[1];
                //Sets the found object
                setCategoryItem(entry)
            }
        })
    })

    return (
        <>
            <h1>{categoryItem.title}</h1>
            <h2>{categoryItem.description}</h2>
        </>
    )
}