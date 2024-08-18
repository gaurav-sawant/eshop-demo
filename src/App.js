import "./App.css";
import BodyComponent from "./components/Body";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Header />
                <Login />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <BodyComponent />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
