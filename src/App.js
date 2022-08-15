import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import SharedLayout from "./Components/SharedLayout";
import SingleProducts from "./Components/SingleProducts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="About" element={<About />}></Route>
            <Route path="Product" element={<Product />}></Route>
            <Route path="product/:productId" element={<SingleProducts />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
