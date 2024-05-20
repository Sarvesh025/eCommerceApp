import React from "react";

const footer = {
  height: "45vh",
  background: "url('../src/assets/footer.png')",
};

const links = {
  display:'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
  height:'65%'
}

const socialMedia = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '100%'
}

export default function Footer() {
  return (
    <div style={footer}>
        <p style={{textAlign:'center'}}>
          At our custom t-shirt company, we believe that every individual
          deserves to express their unique style and personality through their
          clothing. That’s why we offer high-quality, custom-designed t-shirts
          that are tailored to your preferences.
        </p>
      <div style={links}>
      <div>
        <h3>About Us</h3>
        <ul>
        <li>Our story</li>
        <li>Meet the team</li>
        <li>Sustainability</li>
        <li>Blog</li>
        </ul>
      </div>
      <div>
        <h3>Customer Service</h3>
        <ul>
        <li>Contact us</li>
        <li>FAQ</li>
        <li>Size Guide</li>
        <li>Shipping & Returns</li>
        <li>Track Your Order</li>
        </ul>
      </div>
      <div>
        <h3>Design Studio</h3>
        <ul>
        <li>How it Works</li>
        <li>Design Tips</li>
        <li>Gallery</li>
        <li>Testimonials</li>
        </ul>
      </div>
      <div>
        <h3>Legal</h3>
        <ul>
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        </ul>
      </div>
      <div style={socialMedia}>
      <i className="ri-instagram-line"></i>
      <i className="ri-facebook-circle-line"></i>
      <i className="ri-whatsapp-line"></i>
      <i className="ri-mail-line"></i>
      </div>
      </div>
    </div>
  );
}
