import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import Lab2 from "./Lab/lab2";
import { Lab1 } from "./Lab/Lab1";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/lab1" element={<Lab1 />} /> //Lab 1
        <Route path="/lab2" element={<Lab2 />} /> //Lab 2
      </Routes>
    </>
  );
}

export default App;
