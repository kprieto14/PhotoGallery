import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import gallery from '../gallery.json'
import { GalleryItemType } from "../App";
import { PhotoItem } from "../components/PhotoItem";

export function PhotoList() {
    const params = useParams<{ category:string }>()
    //const history = useNavigate()

    //Turns JSON object into an array to work with
    const entries = Object.entries(gallery)

    const initialList = [{
        title: '',
        imageURL: '',
        sourceURL: ''
    }]
    
    const [ categoryItem, setCategoryItem ] = useState<GalleryItemType>({
        category: '',
        title: '',
        description: '',
        photos: []
    })

    const [ photoArray, setPhotoArray ] = useState([initialList])

    useEffect(function() {
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
                //Go through entry.photos and add each one to the array?
                
                setPhotoArray([...photoArray, entry.photos])
            }
        })
    }, [])

    console.log(photoArray)

    // entries.map(([key, hobby]) => (
    //     console.log(key, hobby)
    // ))

    return (
        <div className='photo-list'>
            <h2>{categoryItem.title}</h2>
            <h3>{categoryItem.description}</h3>

            {photoArray.map(([ key ]) => (
                    <PhotoItem
                        key={key.title}
                        title={key.title}
                        imageURL={key.imageURL}
                        sourceURL={key.sourceURL}
                    />
            ))}

        </div>
    )
}