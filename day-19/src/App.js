import "./App.css";
import Counter from "./components/Counter";
function App() {
  return (
    <div className="App">
      <p>
        There are 4 counter component instances that each manage their own
        state.
      </p>
      <div className="counters">
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </div>
  );
}

export default App;
