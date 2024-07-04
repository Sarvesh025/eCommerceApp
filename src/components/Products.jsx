import React, { useEffect } from 'react'
import Section from "./Section/index";
import Services from "./Services";

const container = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
};

export default function Products() {
 
  const recomended = [
    { img: "/assets/1.png", name: "Tshirt-Name", desc: "T-shirt-Description", id:'1', price: 200, offer: 0},
    { img: "/assets/2.png", name: "Tshirt-Name", desc: "T-shirt-Description", id:'2', price: 200, offer: 10},
    { img: "/assets/3.png", name: "Tshirt-Name", desc: "T-shirt-Description", id:'3', price: 200, offer: 50},
    { img: "/assets/4.png", name: "Tshirt-Name", desc: "T-shirt-Description", id:'4', price: 200, offer: 100},
    { img: "/assets/5.png", name: "Tshirt-Name", desc: "T-shirt-Description", id:'5', price: 200, offer: 50},
    { img: "/assets/6.png", name: "Tshirt-Name", desc: "T-shirt-Description", id:'6', price: 200, offer: 50},
    { img: "/assets/7.png", name: "Tshirt-Name", desc: "T-shirt-Description", id:'7', price: 200, offer: 50},
    { img: "/assets/1.png", name: "Tshirt-Name", desc: "T-shirt-Description", id:'1', price: 200, offer: 50},
    { img: "/assets/2.png", name: "Tshirt-Name", desc: "T-shirt-Description", id:'2', price: 200, offer: 50},
    { img: "/assets/3.png", name: "Tshirt-Name", desc: "T-shirt-Description", id:'3', price: 200, offer: 50},
    { img: "/assets/4.png", name: "Tshirt-Name", desc: "T-shirt-Description", id:'4', price: 200, offer: 50},
    { img: "/assets/5.png", name: "Tshirt-Name", desc: "T-shirt-Description", id:'5', price: 200, offer: 50},
    { img: "/assets/6.png", name: "Tshirt-Name", desc: "T-shirt-Description", id:'6', price: 200, offer: 50},
    { img: "/assets/7.png", name: "Tshirt-Name", desc: "T-shirt-Description", id:'7', price: 200, offer: 50},
  ];

  return (
    <div style={container}>
      <Section title="New Arival" data={recomended} />
      <Services/>
      <Section title="Explore More" data={recomended} />
    </div>
  );
}
