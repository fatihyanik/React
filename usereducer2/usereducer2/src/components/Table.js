import React from "react";

function Table({state, dispatch}) {

  

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table className="table" style={{width:"40%"}}>
        <thead>
          <tr>
            <th scope="col">Front</th>
            <th scope="col">Back</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>

      {

        state.map((element,index)=>{

          return(

          <tr key={index}>
            <td>{element.front}</td>
            <td>{element.back}</td>
            <button onClick={()=>dispatch({type:"delete", payload:{index:index}})} className="bg-danger text-white m-1">Delete</button>
          </tr>

          )
        })


      }

        </tbody>
      </table>
    </div>
  );
}

export default Table;