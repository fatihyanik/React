import React, { useState, StrictMode } from "react";

function List() {
  var [list, setList] = useState(["add to task"]);

  function addTask(event) {
    var task = event.target.gorevAciklama.value;
    document.getElementsByName("gorevAciklama")[0].value = "";
    setList([...list, task]);
    event.preventDefault();
  }

  function deleteTask(event) {
    var id = event.target.value;
    console.log(event.target.value);
    list.splice(id, 1);
    setList([...list]);
    event.preventDefault();
  }

  return (
    <StrictMode>
      <div className="kutu shadow-sm baslik">
        <h1>Todos</h1>
      </div>

      <div className="kutu shadow-sm">
        {list.map(function (icerik, sira) {
          return (
            <form key={sira}>
              <div className="veri">
                <input
                  onChange={deleteTask}
                  type="checkbox"
                  name="id"
                  value={sira}
                ></input>
                <p>{icerik}</p>
              </div>
            </form>
          );
        })}

        <form className="veri" onSubmit={addTask}>
          <input
            type="text"
            name="gorevAciklama"
            placeholder="Add your task here"
            autoComplete="off"
          />
          <button type="submit">+</button>
        </form>
      </div>
    </StrictMode>
  );
}

export default List;
