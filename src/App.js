import './App.css';
import Navbar from './Components/navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Hero1 from './Components/Hero/Hero1';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import { Product } from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import About from './Pages/About';
import Careers from './Pages/Careers';
import Contact from './Pages/Contact';
import Hero2 from './Components/Hero/Hero2';

function App() {
  return (
    <div>
  <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/products' element={<Shop/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path=':productID' element={<Product/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
</BrowserRouter>
    <Hero/>
    <Hero1 />
    <Hero2 />


    </div>
  );
}

export default App;
