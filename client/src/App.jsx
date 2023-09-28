import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import Error from "./pages/Error";
import AuthModal from "./components/AuthModal";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />

      <Routes>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
