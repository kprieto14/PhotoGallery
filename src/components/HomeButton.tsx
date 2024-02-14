import React from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from '../assets/ico_home.svg'

export function Breadcrumbs() {
    const location = useLocation()

    let currentLink = ''

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`

            return (
                <div className="crumb" key={crumb}>
                    <Link to={currentLink}>{crumb}</Link>
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