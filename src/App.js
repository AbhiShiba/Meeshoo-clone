import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./Components/Cart/Cart";
import { Home } from "./Components/Home/Home";
import { NavBar } from "./Components/Meesho/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <>
                <NavBar />
                <Cart />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
