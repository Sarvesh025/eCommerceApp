import React from "react";
import styles from './footer.module.css';
import { IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook, IoIosMail  } from "react-icons/io";

export default function Footer() {
  return (
    <div className={styles.footer}>
        <p className={styles.intro}>
          At our custom t-shirt company, we believe that every individual
          deserves to express their unique style and personality through their
          clothing. That’s why we offer high-quality, custom-designed t-shirts
          that are tailored to your preferences.
        </p>
      <div className={styles.links}>
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
      </div>
      <div className={styles.socialMedia}>
      <IoLogoInstagram size={30}/>
      <IoLogoFacebook size={30}/>
      <IoLogoWhatsapp size={30} />
      <IoIosMail size={30} />
      </div>
    </div>
  );
}
