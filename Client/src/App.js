import "./App.css";
import AddUser from "./Components/AddUser";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import AllUsers from "./Components/AllUsers";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/adduser" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
