import React from "react";
import { useReducer } from "react";

// let init = 1;
// const reducer = (state , action)=>{
//     switch(action){
//         case 'increment':
//             return state + 1
//         case 'decrement':
//             return state - 1
//         case 'reset':
//             return init
//         default:
//             return state
//     }
// }
const init = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
      case "reset" : 
      return init
      default : 
      return state
  }
};

const Counter = () => {
  // const [cout , dispach] = useReducer(reducer , init)
  const [count, dispach] = useReducer(reducer, init);

  return (
    <div className="text-center mt-5">
      <h2>count : {count}</h2>
      <button
        className="btn btn-success mt-3"
        onClick={() => dispach("increment")}
      >
        افزایش
      </button>
      <button
        className="btn btn-danger mt-3"
        onClick={() => dispach("decrement")}
      >
        کاهش
      </button>
      <button className="btn btn-warning mt-3" onClick={() => dispach("reset")}>
        ریست
      </button>
    </div>
  );
};
export default Counter;
