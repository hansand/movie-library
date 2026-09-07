import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

const Card = ({
  title
}) => {
  return (
    <div>
      <h2> this is a card component for {title} </h2>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h2>Funtiuonal Arror component</h2>
      <Card title="Star wars" />
      <Card title="Avatar" />
      <Card title="Titanic" />
    </div>
  );
};

export default App;
