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
    { img: "/assets/1.png", desc: "Image-1", id:'1', price: 200},
    { img: "/assets/2.png", desc: "Image-2", id:'2', price: 200},
    { img: "/assets/3.png", desc: "Image-3", id:'3', price: 200},
    { img: "/assets/4.png", desc: "Image-4", id:'4', price: 200},
    { img: "/assets/5.png", desc: "Image-5", id:'5', price: 200},
    { img: "/assets/6.png", desc: "Image-6", id:'6', price: 200},
    { img: "/assets/7.png", desc: "Image-7", id:'7', price: 200},
    { img: "/assets/1.png", desc: "Image-1", id:'1', price: 200},
    { img: "/assets/2.png", desc: "Image-2", id:'2', price: 200},
    { img: "/assets/3.png", desc: "Image-3", id:'3', price: 200},
    { img: "/assets/4.png", desc: "Image-4", id:'4', price: 200},
    { img: "/assets/5.png", desc: "Image-5", id:'5', price: 200},
    { img: "/assets/6.png", desc: "Image-6", id:'6', price: 200},
    { img: "/assets/7.png", desc: "Image-7", id:'7', price: 200},
  ];

  return (
    <div style={container}>
      <Section title="New Arival" data={recomended} />
      <Services/>
      <Section title="Explore More" data={recomended} />
    </div>
  );
}
