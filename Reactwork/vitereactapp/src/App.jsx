import React from "react";
import Student from "./Student";
function App(){
  let s=12;
  const mystyle={
    backgroundColor:'red',
    color:'cyan',
  };
  return(
  <div style={mystyle}>ABES Engineering College
  <div style={mystyle}>(a)</div>
  <div><Student college="ABES Engineering College" name="Harsh" roll="68" branch="CSE" sec="A"></Student></div>
  </div>
  );
}

export default App;