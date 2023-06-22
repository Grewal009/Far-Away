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
    setItems((items) => [...items, it]);
  }

  return (
    <>
      <Logo />
      <Form addItems={handleItems} />
      <ParckingList items={items} />
      <Stats />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
