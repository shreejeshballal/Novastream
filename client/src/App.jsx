import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
