import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );

//   ReactDOM.render(element, document.getElementById("root"));
// }

// setInterval(tick, 1000);
// ReactDOM.render(<h1>hello {react}</h1>, document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById('root'))
