import React, { useState } from "react";
import styles from "./contact.module.css";
import FAQAccordian from '../../components/FAQAccordian/index';

const top = {
  height: "40vh",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  position: "relative",
  margin:'30px 0',
  background:'#2f2f2f'
};

const center = {
  display: "flex",
  gap:'2rem',
  width:'80%',
  margin:'100px auto'
};

const centerElements = {
  minWidth: '30%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '1rem',
  height: '40vh'
}

const view = {
  display:'flex',
  flexDirection :'column',
  gap:'0.5rem',
  width:'inherit'
}

const viewElements = {
  border:'1px solid',
  padding:'10px'
}

const bottom = {
  position:'relative',
  background:'#2f2f2f',
  padding:'25px'
};

const heading = {
  position: "absolute",
  top: "0px",
  left: "10px",
 color:'#6c63ff'
};

export default function Contact() {
  const [selectedQuery, setSelectedQuery] = useState("order");

  function handelQuery(query) {
    setSelectedQuery(query);
  }
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      
      <div style={top}>
      
          <h2 className={styles.heading}>Contact us!</h2>
        
        <div>
          <h2>Search Your Query, here</h2>
          <input
            style={{
              fontSize: "xx-large",
              padding: "10px",
              borderRadius: "31px",
              borderStyle: "unset",
            }}
            type="text"
            placeholder="search here..."
          />
        </div>
        <img
          style={{ height: "85%" }}
          src="/assets/contactImg.svg"
          alt="img..."
        />
      </div>
      <div className={styles.center}>
        <div className={styles.centerElements}>
          <h4 onClick={() => handelQuery("order")} style={selectedQuery === 'order' ? {color:'#6c63ff'} : {color:'white'}}>ORDERS, DELIVERY & PAYMENTS</h4>
          <h4 onClick={() => handelQuery("cancel")} style={selectedQuery === 'cancel' ? {color:'#6c63ff'} : {color:'white'}}>CANCELLATONS</h4>
          <h4 onClick={() => handelQuery("refund")} style={selectedQuery === 'refund' ? {color:'#6c63ff'} : {color:'white'}}>REFUNDS & RETURNS</h4>
          <h4 onClick={() => handelQuery("account")} style={selectedQuery === 'account' ? {color:'#6c63ff'} : {color:'white'}}>MY ACCOUNT</h4>
          <h4 onClick={() => handelQuery("offer")} style={selectedQuery === 'offer' ? {color:'#6c63ff'} : {color:'white'}}>OFFERS & COMBOS</h4>
          <h4 onClick={() => handelQuery("gift")} style={selectedQuery === 'gift' ? {color:'#6c63ff'} : {color:'white'}}>GIFT CARDS</h4>
        </div>

        <div style={{height:'inherit', width:'1px', background:'white'}}></div>

        <div className={styles.view}>
          {selectedQuery === "order" && (
            <>
            <details className={styles.viewElements}>
              <summary>How do i Check the status of my order ? </summary>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
              </p>
            </details>
            <details className={styles.viewElements}>
              <summary>Orders</summary>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
              </p>
            </details>
            <details className={styles.viewElements}>
              <summary>Delivery</summary>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
              </p>
            </details>
            <details className={styles.viewElements}>
              <summary>Payments</summary>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
              </p>
            </details>
            </>
          )}

          {selectedQuery === "cancel" && (
            <>
            <details className={styles.viewElements}>
            <summary>Can I cancel my order ? </summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            <details className={styles.viewElements}>
            <summary>How do i cancel my order, which is already in proceess ? </summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            <details className={styles.viewElements}>
            <summary>Can I cancel my Cancellation Request ?</summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            <details className={styles.viewElements}>
            <summary>Cancellaiton Policy</summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            </>        
              )}
          {selectedQuery === "refund" && (
            <>
            <details className={styles.viewElements}>
            <summary>How do i Return my Product ? </summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            <details className={styles.viewElements}>
            <summary>How will I get my refund ? </summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            <details className={styles.viewElements}>
            <summary>Which products are not eligible for return ?</summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            <details className={styles.viewElements}>
            <summary>I wish Change my Product</summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            <details className={styles.viewElements}>
            <summary>Return & Refund Policy</summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            <details className={styles.viewElements}>
            <summary>Returns</summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            <details className={styles.viewElements}>
            <summary>Refunds</summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            </>                  )}
          {selectedQuery === "account" && (
            <>
            <details className={styles.viewElements}>
            <summary>I have forgoten my Password. </summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            <details className={styles.viewElements}>
            <summary>I would like to unsubscribe Trendsta Promotional SMS and emails.</summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            <details className={styles.viewElements}>
            <summary>I want to delete my Trendsta Account.</summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            <details className={styles.viewElements}>
            <summary>I want to change my phone number.</summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            </>                  )}
          {selectedQuery === "offer" && (
            <>
            <details className={styles.viewElements}>
            <summary>What are combo offers ? </summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            <details className={styles.viewElements}>
            <summary>Can I avail the combo offer on all the products ?</summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            <details className={styles.viewElements}>
            <summary>Can I buy other products along with the combo offers ? </summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            <details className={styles.viewElements}>
            <summary>Can I avail multiple combo offers together ? </summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            <details className={styles.viewElements}>
            <summary>Is the combo-offer still available if I cancel one product from the combo-offer ? </summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            <details className={styles.viewElements}>
            <summary>Does cancelling one product from one combo-offer affect my other orders ? </summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            <details className={styles.viewElements}>
            <summary>Do I have to apply a seperate coupon to avail these combo-offers ? </summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            <details className={styles.viewElements}>
            <summary>Can I apply another coupon on the combo-offers ?</summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            </>                  )}
          {selectedQuery === "gift" && (
            <>
            <details className={styles.viewElements}>
            <summary>Can I apply another coupon on the combo-offers ? </summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            <details className={styles.viewElements}>
            <summary>Orders</summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            <details className={styles.viewElements}>
            <summary>Delivery</summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            <details className={styles.viewElements}>
            <summary>Payments</summary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                recusandae libero unde omnis magni ullam molestias enim
                molestiae dolores beatae?
            </p>
            </details>
            </>                 
            )}
        </div>
      </div>
      <div className={styles.bottom}>
        <h3 className={styles.heading}>Corporate Details!</h3>
        <div>
            <p>Trendsta Brands Pvt. Ltd <br />
                Hatiyara, subashpally <br />
                Gorund Floor, Jazzz House,<br />
                Next to ex-suman's Pvt. Ltd, saradapally Link Road, <br />
                Andheri-East (sometimes no electricity) kolkata, Westbengal, 700159
             </p>
             <p>You can reach us at <b>care@trendsta.com</b> with all queries. *We do not have any customer care number (TBH Insufficient Balance) .</p>
        </div>
        
      </div>
            <FAQAccordian />
    </div>
  );
}
