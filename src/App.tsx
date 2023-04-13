import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Appbar from "./components/nav/Appbar";
import Lunch from "./components/categories/Lunch";
import BreakFast from "./components/categories/BreakFast";
import Dinner from "./components/categories/Dinner";
import Details from "./components/categories/Details";
import { useEffect } from "react";
import Bookmark from "./components/Bookmark";
import Profile from "./components/Profile";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <header className="App-header">
        <Appbar />
      </header>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/breakfast" element={<BreakFast />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/breakfast/:id" element={<Details />} />
          <Route path="/lunch/:id" element={<Details />} />
          <Route path="/dinner/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
