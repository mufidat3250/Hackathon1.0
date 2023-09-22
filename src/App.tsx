import "./App.scss";
import React from "react";
import NavBar from "./atom/NavBar";
import Stars from "./atom/vectors/Stars";
import Home from "./organisms/Home";
import Introduction from "./organisms/Introduction";
import Rules from "./organisms/Rules";

function App() {
  return (
    <div className="App">
      <div className="nav-bar bg-slate-300">
        <NavBar />
      </div>
      <div className="nav-content">
        <Home />
        <Introduction/>
        <Rules/>
      </div>
    </div>
  );
}

export default App;
