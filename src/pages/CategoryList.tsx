import React from "react";
import gallery from '../gallery.json' 
import { CategoryItem } from "../components/CategoryItem";

export function CategoryList() {
    //Turns JSON objects into an array so that map can actually be used to generate CategoryItem
    const entries = Object.entries(gallery)

    entries.map(([key, hobby]) => (
        console.log(key, hobby)
    ))

    return (
        <div className="category-list">
            {entries.map(([key, hobby]) => (
                <CategoryItem
                    key={key}
                    category={key}
                    title={hobby.title}
                    description={hobby.description}
                    photos={hobby.photos}
                />
            ))} 
        </div>
    )
}