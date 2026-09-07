import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

const Card = ({ title }) => {

  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="card">
      <h2> {title} </h2>

    <button onClick={() => setHasLiked(!hasLiked)}>
      {hasLiked ? "❤️" : "🤍"}
    </button>

    </div>
  );
};

const App = () => {


  return (
    <div className="card-container">
       <Card title="Star wars" />
      <Card title="Avatar" />
      <Card title="Titanic" />
    </div>
  );
};

export default App;
