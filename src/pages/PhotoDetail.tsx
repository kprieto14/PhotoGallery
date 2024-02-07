import React, { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import gallery from '../gallery.json'
import { PhotoItemType } from "../App";

export function PhotoDetail() {
    const params = useParams<{ category:string, title:string }>()

    const [ photo, setPhoto ] = useState<PhotoItemType>({
        category:'',
        title:'',
        imageURL:'',
        sourceURL:''
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
                //Manually sets object so that it can be set as a PhotoItemType
                entry.photos.forEach(function(photoObject) {
                    if(photoObject.title.includes(String(params.title))) {
                        const foundPhoto = {
                            category: '',
                            title: photoObject.title,
                            imageURL: photoObject.imageURL,
                            sourceURL: photoObject.sourceURL
                        }

                        setPhoto(foundPhoto)
                    }
                })
            }
        })
    }, [params.category, params.title])
    
    return (
        <figure>
            <h2>{params.title}</h2>
            <img src={photo.imageURL} alt={photo.title} />
        </figure>
    )
}