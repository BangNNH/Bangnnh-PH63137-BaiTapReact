import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import Lab2 from "./Lab/Lab2";
import { Lab1 } from "./Lab/Lab1";
import { Lab3 } from "./Lab/Lab3";
import StoryList from "./Lesson/Lesson4";
import Lab5 from "./Lab/Lab5";
import Lab6 from "./Lab/Lab6";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lab1" element={<Lab1 />} /> //Lab 1
        <Route path="/lab2" element={<Lab2 />} /> //Lab 2
        <Route path="/lab3" element={<Lab3 />} /> //Lab 3
        <Route path="/lesson4" element={<StoryList />} /> //Lab 4
        <Route path="/lab5" element={<Lab5 />} /> //Lab 5
        <Route path="/lab6/:id" element={<Lab6 />} /> //Lab 6
      </Routes>
    </>
  );
}

export default App;
