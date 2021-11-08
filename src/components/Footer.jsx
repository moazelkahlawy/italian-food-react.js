import React from 'react'
import '../styles/Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                    <div className="contact-us">
                        <h6>Cotact Us</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eum facilis voluptas harum dolorem quaerat laborum eligendi alias.</p>
                        <div className="icons">
                        <ul>
                            <li><a href="/" className="icon "><i class="fab fa-instagram"></i></a></li>
                            <li><a href="/" className="icon "><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="/" className="icon "><i class="fab fa-twitter"></i></a></li>
                            <li><a href="/" className="icon "><i class="fab fa-whatsapp"></i></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-2 mt-5 mt-md-0 mt-lg-0">
                        <div className="footer-list">
                        <h6>About</h6>
                        <ul>
                            <li><a href="/">History</a></li>
                            <li><a href="/">Our Team</a></li>
                            <li><a href="/">Brand Guidelines</a></li>
                            <li><a href="/">Terms&Condition</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                        </ul>
                        </div>
                    </div>  
                    <div className="col-md-6 col-lg-2 mt-5 mt-md-5 mt-lg-0">
                    <div className="footer-list">
                        <h6>Services</h6>
                        <ul>
                            <li><a href="/">How to Order</a></li>
                            <li><a href="/">Our Product</a></li>
                            <li><a href="/">Order Status</a></li>
                            <li><a href="/">Promo</a></li>
                            <li><a href="/">Payment Method</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2 mt-5 mt-md-5 mt-lg-0">
                    <div className="footer-list">
                        <h6>Other</h6>
                        <ul>
                            <li><a href="/">Contact Us</a></li>
                            <li><a href="/">Help</a></li>
                            <li><a href="/">Privacy</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
    )
}

export default Footer
