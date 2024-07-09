import "./App.css";
import { Route, Routes, Link } from "react-router-dom";

//components
import Home from "./Home";
import Number from "./Number";
import Word from "./Word";
import WordColor from "./WordColor";

const App = () => {
  return (
    <div className="App">
      <h2>Link-Router</h2>
      <ul>
        <li>
          <Link to="/home">Welcome</Link>
        </li>
        <li>
        <Link to="number/4">Number</Link>
        </li>
        <li>
        <Link to="word/hello">Word</Link>
        </li>
        <li>
          <Link to="wordcolor/hello/blue/pink">Word Color</Link>
        </li>
      </ul>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/number/:number" element={<Number />} />
            <Route path="/word/:word" element={<Word />} />
            <Route path="/wordcolor/:word/:textColor/:bgColor" element={<WordColor />} />
        </Routes>
    </div>
  );
}

export default App;