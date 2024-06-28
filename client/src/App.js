import { BrowserRouter, Routes, Route } from "react-router-dom";
import Book from "./pages/Book";
import Update from "./pages/Update";
import Add from "./pages/Add";
import "./style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
