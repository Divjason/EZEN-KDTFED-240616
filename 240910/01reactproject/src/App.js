import "./App.css";

function App() {
  let count = 0;

  const plus = () => {
    count += 1;
    console.log(count);
  };

  const minus = () => {
    count -= 1;
    console.log(count);
  };

  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

export default App;
