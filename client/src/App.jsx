import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import Error from "./pages/Error";
import AuthModal from "./components/AuthModal";
import Home from "./pages/Home";
import Upload from "./pages/Upload";

import { AuthModalProvider } from "./context/AuthModalContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthModalProvider>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
        <AuthModal />
      </AuthModalProvider>
    </BrowserRouter>
  );
}

export default App;
