import React, { useState } from "react";
import "./index.css";
import Title from "./components/Title/Title";
import Input from "./components/Input/Input";
import List from "./components/List/List";

function App() {
  const [listItems, setListItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    console.log(listItems);
    setListItems((prev) => {
      return [{ title: input, isComplete: false, key: Math.random() }, ...prev];
    });
    setInput("");
  };

  const getInput = (input) => {
    setInput(input);
  };

  const onCompleted = (id) => {
    setListItems((prev) => {
      return prev.map((item) =>
        item.key === id ? { ...item, isComplete: !item.isComplete } : item
      );
    });
  };

  return (
    <div>
      <Title />
      <Input addItem={addItem} getInput={getInput} input={input} />
      <List listItems={listItems} onCompleted={onCompleted} />
    </div>
  );
}

export default App;
