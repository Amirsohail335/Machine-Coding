import React, { useState } from "react";

const Counter = () => {
  const [history, setHistory] = useState([0]);
  const [position, setPosition] = useState(0);

  const currentValue = history[position];

  const addValueToHistory = (newValue) => {
    const newHistory = history.slice(0, position + 1);
    setHistory([...newHistory, newValue]);
    setPosition(position + 1);
  };

  const increament = ()=>{
    addValueToHistory(currentValue +1)
  }

  const decreament = ()=>{
    addValueToHistory(currentValue-1)
  }

  
  const undo = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  const redo = () => {
    if (position < history.length - 1) {
      setPosition(position + 1);
    }
  };
  return (
    <div className="flex flex-col font-bold pt-[10px] justify-center bg-green-50">
      <h2>Counter with Undo/Redo</h2>
      <div className="flex justify-center gap-4">
        <div className="justify-center items-center flex">
          <div>{currentValue}</div>
        </div>
        <button onClick={increament}>+</button>
        <button onClick={decreament}>-</button>
      </div>
      <div className="flex justify-center gap-4">
        <button className="cursor-pointer"onClick={undo}>Undo</button>
        <button onClick={redo}>Redo</button>
      </div>
    </div>
  );
};

export default Counter;
