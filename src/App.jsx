import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Humanoid from "./components/pages/Humanoid";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Background from "./components/layout/Background";

function App() {
  return (
    <Router>
      <Background />
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/humanoid" element={<Humanoid />} />
        </Routes>
      </Container>
      <Footer />
      <Analytics />
    </Router>
  );
}

export default App;
