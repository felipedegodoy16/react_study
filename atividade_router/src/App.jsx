import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../public/style.css";
import Header from "./Header";
import Home from "./Home";
import Product from "./components/Product";
import Contact from "./Contact";
import Error404 from "./Error404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
