import React, { useState } from 'react'

function Controls({dispatch}) {

  
   function sendData(){

    const front = document.querySelector("#front");
    const back = document.querySelector("#back");
    
    
    const data = {
        front : front.value,
        back : back.value,
        isFront : true
    }
    
    front.value = "";
    back.value = "";
    
    dispatch({type:"add",payload:{card:data}})
}  
    
   
    return (
        <div>
            <input id="front" placeholder='Front of Card'/>
            <input id='back' placeholder='Back of Card'/>
            <button onClick={sendData}>Add Card</button>
        </div>
    )
}

export default Controls