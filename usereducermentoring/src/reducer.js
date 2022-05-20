
export const Reducer=(state,action)=>{
    console.log(action)
    switch(action.type){
        case "additem":
            return {...state, tasks:[...state.tasks, {id:state.tasks.length, text: action.payload, done:false}]}
        case "updateitem":
                return( { ...state, tasks:state.tasks.map(task=> task.id===action.payload ? {...task,done:!task.done} : task)} )
        case "incrementCounter":
            return( {...state, counter: state.counter+1})
        default:
            return state;

    }

   /*  if(action.type==="additem"){
        return {...state, tasks:[...state.tasks, {id:state.tasks.length, text: action.payload, done:false}]}
    }
    if(action.type==="updateitem"){
        return( { ...state, tasks:state.tasks.map(task=>{
            if(task.id===action.payload){
                task.done=!task.done
                return task
            }
            return task;
        })} )
    }
    if(action.type==="incrementCounter"){
        return(
            {...state, counter: state.counter+1}
        )
    } */
    //addtask


//updatetask

//deletetask

//inremntCounter

}

export const initialState={
    tasks: [
        {id:0, text:"Breakfast", done:false},
        {id:1, text:"Coding", done:false},
    ],
    counter:0,
    status:false
}