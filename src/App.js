import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./components/Logo";
import Form from "./components/Form";
import ParckingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  function handleItems(it) {
    //update array not by mutating
    setItems((items) => [...items, it]);
  }

  function handleDelete(id) {
    console.log(id);
    setItems((item) => item.filter((it) => it.id !== id));
  }

  return (
    <>
      <Logo />
      <Form addItems={handleItems} />
      <ParckingList items={items} deleteItem={handleDelete} />
      <Stats />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
