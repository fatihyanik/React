import React from 'react'
import {useParams} from "react-router-dom";
import {getDog} from "../data";


function Dog() {
    let params = useParams();  // let {dogName} = useParams() let dog = getDog(dogName)
    let dog = getDog(params.dogName);
    return (
        <div className="mt-5">
            <h2>Name: {params.dogName}</h2>
            <p>Age: {dog.age}</p>
            <p>{dog.detail}</p>
        </div>

)
}

export default Dog
