import React from 'react'
import styles from './quality.module.css'
import Card from './Card'

export default function index() {
  return (
    <div className={styles.quality}>
      {/* <img src="/assets/funnyMore.jpg" alt="image..." className={styles.background}/> */}
        <Card img='/' heading = 'No Quantity Restriction' content='No set up fees and No Minimum Order Quantities – Not Just In Cheap Quality Digital / DTG Prints, In Teelabs no restriction on Screen Printing & Embroidery Tees, also can personalize t-shirt itself from single quantity, Any Styles, Any Size & Any Color'/>
        <Card img='/' heading = 'More Quality Option to Choose' content='In TeeLabs we have 10+ fabric Quality options to choose to fit your budget and requirements.for example in polos 240GSM in 4 different qualities, round neck 180GSM in 5 qualities. talk to our sales advisor to know more about t-shirt quality and how to choose one for you.'/>
        <Card img='/' heading = '50+ Fabric Shades or Custom Colors' content='We understand the importance of choice when it comes to customizing your t-shirts. That’s why we offer an extensive selection of over 50 fabric colors to suit every preference and occasion. Whether you’re looking for vibrant hues to make a statement or something subtle for a more understated look, teelabs is the place to be. We also custom dye fabrics to match your Brand color'/>
        <Card img='/' heading = '24 / 7 TOLLFREE SUPPORT' content='Need assistance? Our customer Service team atTeeLabs is here to help! From design inquiries to order tracking, we’ve got you covered. Reach out via phone, email, or live chat for prompt and friendly assistance. Your satisfaction is our priority. At Teelabs we have a dedicated whatsapp number for Complaints.With our step-by-step order approval system, you have full control and visibility into every stage of your order.'/>
        <Card img='/' heading = 'Branding options' content='TeeLabs has more branding options in the industry and all in house so we no quantity Restriction in High quality Screen Print, Embroidery, DTF, Reflective prints,Foil Prints. If your brand logo / Design in gradient in colors we offer exquisite gradient embroidery services to elevate your custom t-shirts to the next level.'/>
        <Card img='/' heading = 'Competitive Pricing' content='We are unlike our competitors when It comes to Pricing, we prioritize affordability without compromising quality. Our transparent pricing ensures you get the best deal on custom t-shirts. Experience cost-effective solutions tailored to your needs, delivering exceptional results without breaking the bank. Explore our offerings today'/>
        <Card img='/' heading = 'Strict Quality Control' content='Not only we are Local, Affordable And Friendly; We also priorities the Quality of our Products too. Every Order Will be subjected to a strict Quality Control Process for your Reassurance. Easy return & exchange policy for iKUKA brand tees'/>
        <Card img='/' heading = 'Fast Dispatch' content='Get your custom t-shirts in no time! With lightning-fast dispatch, TeeLabs ensures your personalized shirts are on their way to you swiftly. Our efficient process guarantees quick turnaround without compromising quality. Order today and experience the speed and convenience of custom apparel delivery like never before!'/>
    </div>
  )
}
