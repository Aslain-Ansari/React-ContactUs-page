import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Navigation from "./components/Navigation/Navigation";
import SubmitPage from "./components/SubmitPage/SubmitPage";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      {/* <ContactHeader /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<ContactForm />} />
        <Route path="/submitted" element={<SubmitPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
