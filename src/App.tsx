import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="login" element={<Login></Login>} />
        <Route path="listuser" element={<ListUser></ListUser>} />
        <Route path="adduser" element={<AddUser></AddUser>} /> */}
      </Routes>
    </>
  );
}

export default App;
