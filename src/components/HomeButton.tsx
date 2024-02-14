import React from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from '../assets/ico_home.svg'

export function Breadcrumbs() {
    const location = useLocation()

    let currentLink = ''

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            //Replace all unneccessary strings from link in crumb so that it can appear more clean on page
            let newCrumbString = crumb
                .replaceAll("%", " ")
                .replaceAll("20", "")
                .replace(" C3 9F", "ß")
        
            currentLink += `/${crumb}`

            return (
                <div className="crumb" key={crumb}>
                    <Link to={currentLink}>{newCrumbString}</Link>
                </div>
            )
        })

    return(
        <nav>
            <img src={HomeIcon} alt="Icon of a house" />
            <Link to={'/'} className="crumb"><button>Home</button></Link>
            <div className="breadcrumbs">{crumbs}</div>
        </nav>
    )
}