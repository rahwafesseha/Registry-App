import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Registry() {
  const [registry, setRegistry] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [error, setError] = useState(false)
  const addItem = (e) => {
    e.preventDefault();
    const tempData = [...registry];
    tempData.push(textInput);
    setRegistry(tempData);
    setTextInput("");
  
  };
      console.log(registry);
  //to remove an item
  const removeItem=(index)=>{
    let newData = [...registry]
    newData.splice(index,1)
    setRegistry(newData);
  }
  const editItem = (index)=>{
    let newData = [...registry];
    newData[index]= textInput;
    setRegistry(newData);
  }


    //creates effects on certain triggers
    useEffect(()=>{
      if(textInput.length >10)setError(true)
      else setError(false);
    },[textInput])
  return (
    <div>
      <h1>Registry</h1>
      <Link to="/">Click here to go to home</Link>
      <form onSubmit={addItem}>
        <label>
          Text Input:
          <input
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
      {error ? <span style={{color:"red"}}> Error occurred </span> : null}
{/* to render all the registry */}
{registry.map((item,index)=>{
  return (
    <li key={index}>
      {item} <button onClick={() => removeItem(index)}>Remove</button>
      <button onClick={() => editItem(index)}>Update</button>
    </li>
  );
})}
    </div>
  );
}

export default Registry;
