import React from "react";

function Viewer({ state, dispatch }) {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h1>Card Viewer</h1>

      {state.map((element, index) => {
        return (
          <div
            className={`${element.isFront ? "bg-success" : "bg-danger"}`}
            onClick={() =>
              dispatch({
                type: "toogle",
                payload: { index: index, isFront: !element.isFront },
              })
            }
            style={{
              padding: "100px",
              width: "40%",
              border: "1px solid black",
              margin: "10px",
            }}
          >
            <h1 className="text-light">
              {element.isFront ? element.front : element.back}
            </h1>
          </div>
        );
      })}
    </div>
  );
}

export default Viewer;
