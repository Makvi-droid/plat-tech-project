import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './navbar.jsx';
import Content from './content.jsx';
import AboutUs from './aboutUs.jsx';
import Product from './product.jsx';
import ContactUs from './contactUs.jsx';
import Developers from './developers.jsx';
import Footer from './footer.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Content />
    <AboutUs />
    <Product />  
    <ContactUs />
    <Developers />
    <Footer />
  </StrictMode>,
)
