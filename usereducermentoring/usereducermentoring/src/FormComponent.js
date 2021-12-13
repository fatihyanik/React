import React,{useRef,useState} from 'react'

export default function FormComponent({dispatch}) {
    //reference
    const inpRef = useRef()
    const [error,setError] =useState("")

    const submitData=(e)=>{
        e.preventDefault()
        if(inpRef.current.value.trim()!==""){
            dispatch({type:"additem",payload:inpRef.current.value})
            /* inpRef.current.value="" */
            e.target.reset()
        }else{
            setError("please enter task into input field")
        }
       
    }

    return (
        <>
        <h3>{error}</h3>
        <form onSubmit={submitData}>
              <input ref={inpRef} type="text" name="task" onFocus={()=>setError("")}/>
              <input type="submit"  value="add task"/>  
        </form>
        </>
    )
}




  /*  const addTask=(e)=>{
        e.preventDefault()
        console.log(inpRef.current.value)
        setTasks(prevState=>[...prevState, {id:prevState.length,text:inpRef.current.value,done:false }])
    } */