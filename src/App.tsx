import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Appbar from "./components/nav/Appbar";
import Lunch from "./components/categories/Lunch";
import BreakFast from "./components/categories/BreakFast";
import Dinner from "./components/categories/Dinner";

function App() {
  return (
    <header className="App-header">
      <Appbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/breakfast" element={<BreakFast />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/dinner" element={<Dinner />} />
        </Routes>
      </div>
    </header>
  );
}

export default App;
