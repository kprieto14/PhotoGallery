import React from "react"; 
import { useParams } from "react-router-dom";

export function PhotoDetail() {
    const params = useParams<{ category:string, title:string }>()

    console.log(params)
    
    return (
        <h1>Something</h1>
    )
}