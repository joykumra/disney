import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
