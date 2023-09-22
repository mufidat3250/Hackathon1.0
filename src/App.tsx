import "./App.scss";
import React from "react";
import NavBar from "./atom/NavBar";
import Stars from "./atom/vectors/Stars";
import Home from "./organisms/Home";
import Introduction from "./organisms/Introduction";

function App() {
  return (
    <div className="App">
      <div className="nav-bar bg-slate-300">
        <NavBar />
      </div>
      <div className="nav-content">
        <Home />
        <Introduction/>
      </div>
    </div>
  );
}

export default App;
