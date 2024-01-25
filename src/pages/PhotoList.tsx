import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import gallery from '../gallery.json' 
import { GalleryItemType } from "../App";


export function PhotoList() {
    const params = useParams<{ category:string }>()
    const entries = Object.entries(gallery)
    //const history = useNavigate()

    const [ categoryItem, setCategoryItem ] = useState<GalleryItemType>({
        category: '',
        title: '',
        description: '',
        photos: []
    })

    useEffect(function() {
        // const category = entries.find(hobby => hobby.includes(params.category))   
    })

    return (
        <>
            <h1>{categoryItem.title}</h1>
            <h2>{categoryItem.description}</h2>
        </>
    )
}