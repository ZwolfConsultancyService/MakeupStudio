import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeroSec from './pages/HeroSec';
import About from './pages/About';
import Services from './pages/Services';
import OurPortfolio from './pages/OurPortfolio';
import AboutFounder from './pages/AboutFounder';
import Review from './pages/Review';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Floatingbtn from './components/FloatingBtn';
import InquiryForm from './components/InquiryForm';
import TnC from './pages/TnC';
import PrivacyP from './pages/PrivacyP';
import Refund from './pages/Refund';
import ScrollToTop from './components/ScrollToTop';
import YouTube from './pages/YouTube';
import { ToastContainer } from 'react-toastify';



const App = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <>
     {showForm && <InquiryForm onClose={closeForm} />}
     <ToastContainer/>
    <BrowserRouter>
    <Header/>
    <ScrollToTop/>
    <Routes>
    <Route
            path="/"
            element={
              <>
                <HeroSec/>
                <About/>
                <Services/>
                <OurPortfolio/>
                <YouTube/>
                <AboutFounder/>
                <Review/>
                <Contact/>
               
              </>
            }
          />
      
      <Route path="/about-us" element={<About/>} />
      <Route path="/our-services" element={<Services/>} />
      <Route path="/our-portfolio" element={<OurPortfolio/>} />
      <Route path="/contact-us" element={<Contact/>} />



        
      <Route path="/terms-conditions" element={<TnC/>} />
      <Route path="/privacy-policy" element={<PrivacyP/>} />
      <Route path="/refund-policy" element={<Refund/>} />
      
    </Routes>
    <Floatingbtn/>
    <Footer/>   
    </BrowserRouter>
    </>
  )
}

export default App