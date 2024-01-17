import { useState } from "react";
import "./App.css";
import Status from "./components/Status";
import StatusForm from "./components/StatusForm";

function App() {
  return (
    <div className="App">
      <h1>Diaries</h1>
      <h3>Unknown thoughts by someone</h3>

      <StatusForm />
      <Status/>
    </div>
  );
}

export default App;
