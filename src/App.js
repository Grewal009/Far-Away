import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./components/Logo";
import Form from "./components/Form";
import ParckingList from "./components/PackingList";
import Stats from "./components/Stats";

const App = () => {
  return (
    <>
      <Logo />
      <Form />
      <ParckingList />
      <Stats />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
