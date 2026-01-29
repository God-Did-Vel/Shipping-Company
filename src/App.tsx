import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import TopBar from "./Components/TopBar/TopBar";
import FooterSection from "./Components/FooterSection/FooterSection";

import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/AboutUs/AboutUs";
import Contact from "./Components/Pages/ContactUs/ContactUs";
import Development from "./Components/Pages/Development/Development";
import Documentation from "./Components/Pages/Documentations/Documentations";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* These show on ALL pages */}
        <Header />
        <TopBar />

        {/* This part changes based on route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/Development" element={<Development />} />
          <Route path="/Documentations" element={<Documentation />} />
        </Routes>

        {/* Footer shows on ALL pages */}
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;
