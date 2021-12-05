import React from 'react'
import {Outlet,useLocation} from "react-router-dom"
export default function Users() {
    const location = useLocation()
    console.log(JSON.parse(location.state))
    return (
        <div>
            <h1>Users Page</h1>
           
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates adipisci assumenda cumque voluptatum neque consequatur rem repellendus, reprehenderit officiis commodi repudiandae soluta inventore voluptatem eaque itaque aliquam exercitationem illo. Dolorum temporibus cumque reprehenderit dignissimos est. Soluta assumenda delectus aliquid, eveniet incidunt laboriosam tempore rerum aut architecto amet odit quae asperiores?</p>

            <Outlet/>
        
        </div>
    )
}