import React, { useState } from "react";

const Character = (props) => { 
  const char = props.char;
  const [show, setShow] = useState(false);
  const toggleButton = () => {
    setShow(!show)
  }
  const btnText = (show) ? "Show less" : "Show more"
  return(
  <div>
    <div>{char.name}</div>
    {show && <div>{char.details}</div>}
    <button onClick={toggleButton}>{btnText}</button>
  </div>
  );
}
export default Character;