import './footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Location</h3>
                    <p>123 Anywhere ST., Any City, ST 12345</p>
                </div>

               
                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <p>Email: hello@reallygreatsite.com</p>
                    <p>Phone: +123-456-7890</p>
                </div>

                
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-pinterest"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
