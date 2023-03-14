import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home";
import About from "./About";
import Products from "../Products";
import Locations from "./Locations";
import Contact from "./Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
