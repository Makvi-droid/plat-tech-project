import './navbar.css';
import logo from './assets/logo.svg';

function Navbar(){
    return(
        <>
           <header> 
                <nav className="navbar">
                    <img src={logo} alt="logo" />
                    <ul className='nav-ul'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Products</li>
                        <li>Contact Us</li>
                    </ul>

                    <div className="nav-icons">
                        <i className="fa-solid fa-circle-user"></i>
                        <i class="fa-solid fa-cart-shopping"></i>
                        <i class="fa-solid fa-bell"></i>
                        <i className="fa-solid fa-gear"></i>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;