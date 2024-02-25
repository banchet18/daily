import "./App.css";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <img
          className="bgImage"
          src="https://images.pexels.com/photos/1187538/pexels-photo-1187538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
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
