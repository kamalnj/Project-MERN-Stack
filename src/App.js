import './App.css';
import Navbar from './Components/navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Hero1 from './Components/Hero/Hero1';
import Hero2 from './Components/Hero/Hero2';
import Hero3 from './Components/Hero/Hero3';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import About from './Pages/About';
import Careers from './Pages/Careers';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        {/* Main content */}
        <div>
          {/* Define routes here */}
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
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/products/:productID" element={<Product />} />
          </Routes>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
