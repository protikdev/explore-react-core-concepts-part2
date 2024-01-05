import "./App.css";
import Counter from "./counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";

function App() {
  function handleClick() {
    alert("button clicked");
  }
  const handleClick2 = () => {
    alert("button 2 clicked");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h3>React core concepts 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      {/* <button onClick={"handleClick()"}>click me</button> */}
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click2</button>
      <button
        onClick={() => {
          alert("third clicked");
        }}
      >
        third
      </button>
      <button onClick={() => addToFive(3)}>four</button>
    </>
  );
}

export default App;
