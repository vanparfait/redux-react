import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { incrementBird } from "../../store/birds/birds";

const App = () => {
  const birds = useSelector((state) => state.birds);
  const dispatch = useDispatch();
  return (
    <div className="wrapper">
      <h1>Bird List</h1>
      <form>
        <label>
          <p>Add Bird</p>
          <input type="text" />
        </label>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <ul>
        {birds.map((bird) => (
          <li key={bird.name}>
            {bird.name}
            <div> Views: {bird.views} </div>
            <button onClick={() => dispatch(incrementBird(bird.name))}>
              <span role="img" aria-label="add">
                ➕
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
