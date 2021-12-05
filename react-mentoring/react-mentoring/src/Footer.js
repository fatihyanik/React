import React from 'react'
import {useLocation,NavLink} from "react-router-dom"

export default function Footer() {
    const {pathname} = useLocation()
    return (
        <div>
             <NavLink to={pathname==="/contact"? "/about": "/contact"} /* onClick = {setPathname} */>{pathname==="/contact"? "go to about page":"go to contact page"}</NavLink>
        </div>
    )
}