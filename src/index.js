import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import List from "./List";
// // this is become a component of react .
// function Heading(){
// return <h1> My Favourite Foods </h1>
// }
ReactDOM.render(
  <div>
    {/*here we made the component of <h1> My favourite Foods */}
    <Heading />
    {/*Now we make another component of List  */}
    <List />
  </div>,
  document.getElementById("root")
);
