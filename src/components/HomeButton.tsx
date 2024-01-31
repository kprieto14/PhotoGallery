import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from '../assets/ico_home.svg'

export function HomeButton() {
    return(
        <nav>
            <img src={HomeIcon} alt="Icon of a house" />
            <Link to={'/'}><button>Home</button></Link>
        </nav>
    )
}