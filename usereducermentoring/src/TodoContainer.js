import React, { useReducer} from 'react'
import FormComponent from './FormComponent'
import {Reducer,initialState} from "./reducer"

export default function TodoContainer() {
    const [state, dispatch] = useReducer(Reducer,initialState)
    
    return (
        <div>
            <FormComponent dispatch={dispatch}/>
       
        <ul>
            {state.tasks.map(task=>{
                return(
                    <li onClick= {()=>dispatch({type:"updateitem",payload:task.id})} key={task.id} style={{border:"2px solid black", backgroundColor:task.done ? "green": "yellow"}}> {task.text}</li>
                )
            }
                )}
        </ul>

        <h2>counter : {state.counter}</h2>
        <button onClick={()=>dispatch({type:"incrementCounter"})}>increment</button>
        <button onClick={()=>dispatch({type:"decrementCounter"})}>increment</button>
        </div>
    )
}




/*     const [tasks,setTasks] = useState([
        {id:0, text:"Breakfast", done:false},
        {id:1, text:"Coding", done:false},
    ])
    const [counter,setCounter]=useState(0)
 */


/* const updateTask=(id)=>{
    setTasks(tasks.map(task=>{
        if(task.id===id){
            task.done=!task.done
            return task
        }
        return task;
    }))
}
 */