import "./App.css";

import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Hero1 from "./Components/Hero/Hero1";
import Hero2 from "./Components/Hero/Hero2";
import Hero3 from "./Components/Hero/Hero3";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Careers from "./Pages/Careers";
import Contact from "./Pages/Contact";
import Mdpoublier from "./Components/Auth/Mdpoublier";
import { AuthProvider } from "../src/Components/Auth/AuthContext";
import ScrollToTop from "./Components/ScrollTop";
import Admin from "./Components/Admin/Admin";
import Ajouter from "./Components/Admin/Ajouter";
import Postuler from "./Components/Admin/Postuler";
import Durabilite from "../src/Pages/Durabilite";
import Modifier from "./Components/Admin/Modifier";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div>
        <ScrollToTop />
          <Navbar />
          <div>
            <Routes>
              <Route
                path="/"
                element={
                  <div>
                    <Hero />
                    <Hero1 />
                    <Hero2 />
                    <Hero3 />
                  </div>
                }
              />
              <Route path="/products" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/mdp" element={<Mdpoublier />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/Ajouter" element={<Ajouter />} />
              <Route path="/postuler" element={<Postuler />} />
              <Route path="/durabilité" element={<Durabilite />} />
              <Route path="/modifier/:nomoffre" element={<Modifier />} />


            </Routes>
          </div>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
