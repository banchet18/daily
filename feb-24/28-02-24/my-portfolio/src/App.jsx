import "./App.css";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import BackgroundComp from "./components/BackgroundComp";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <BackgroundComp />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
