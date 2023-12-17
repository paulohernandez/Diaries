import { useState } from "react";
import "./App.css";
import Status from "./components/Status";

function App() {


  return (
    <div className="App">
      <h1>Diaries</h1>
      <h3>Unknown thoughts by someone</h3>
      
    <Status/>
    <Status/>
    <Status/>
    <Status/>
    </div>
  );
}

export default App;
