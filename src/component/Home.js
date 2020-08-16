import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="title is-1">🐶Tic Tac Toe 🐱</h1>
      <div className="playermode">
        <Link to="/selectsides" className="button is-primary is-inverted">
          Single
        </Link>
        <Link to="/doubleplayer" className="button is-primary is-inverted">
          Double
        </Link>
      </div>
    </div>
  );
}

export default Home;
