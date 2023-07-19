import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Product from "./pages/Productdetails";
import { Toaster } from "react-hot-toast";
import Addproduct from "./components/Addproduct";
import Cartpage from "./pages/Cartpage";
import Searchdash from "./pages/Searchdash";
import Admin from "./pages/Admin";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Searchdash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Addproduct" element={<Addproduct />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/card" element={<Admin />} />
      </Routes>
      <Footer />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
