import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import Error from "./pages/Error";
import AuthModal from "./components/AuthModal";
import Home from "./pages/Home/Home";
import { AuthModalProvider } from "./context/AuthModalContext.jsx";
import Container from "./layout/Container";
import Upload from "./pages/Upload/Upload";
import Explore from "./pages/Explore";

function App() {
  return (
    <BrowserRouter>
      <AuthModalProvider>
        <Navbar />
        <Sidebar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Container>
        <AuthModal />
      </AuthModalProvider>
    </BrowserRouter>
  );
}

export default App;
