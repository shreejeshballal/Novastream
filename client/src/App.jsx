import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Toaster } from "sonner";

import Navbar from "./layout/Navbar/Navbar";
import Sidebar from "./layout/Sidebar";
import Error from "./pages/Error";
import AuthModal from "./features/authentication/AuthModal";
import Home from "./pages/Home/Home";
import { AuthModalProvider } from "./context/AuthModalContext.jsx";
import Container from "./layout/Container";
import Upload from "./features/Upload/Upload";
import Explore from "./pages/Explore";
import Subscription from "./pages/Subscription/Subscription.jsx";

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
            <Route path="/subscriptions" element={<Subscription />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Container>
        <AuthModal />
      </AuthModalProvider>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
