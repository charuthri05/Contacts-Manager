import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/list" element={<ContactList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
