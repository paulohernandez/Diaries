import { useState } from "react";
import "./App.css";

function App() {
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);

  const handleClick = () => {
    if (!isLike) {
      setLike(1);
      setIsLike(true);
    } else {
      setLike(0);
      setIsLike(false);
    }
  };

  return (
    <div className="App">
      <h1>Diaries</h1>
      <h3>Unknown thoughts by someone</h3>
      <div className="status-container">
        <div className="status-information">
          <h1>
            This is the founder of diaries , Hope that you are doing great !,
            grinding yourself to become WHAT YOU WANT IN LIFE!
          </h1>
        </div>
        <div className="status-react-container">
          <h2>{like}</h2>
          <button onClick={handleClick}>Like</button>
        </div>
      </div>
    </div>
  );
}

export default App;
