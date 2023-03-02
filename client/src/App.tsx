import "./App.css";
import { NavBar } from "./components";
import Switch from "./components/Switch/Switch";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Switch />
      </main>
    </div>
  );
}

export default App;
