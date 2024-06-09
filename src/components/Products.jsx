import React from "react";
import Section from "./Section/index";

const container = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
};

export default function Products() {
  const recomended = [
    { img: "/assets/1.png", desc: "Image-1", id:'1'},
    { img: "/assets/2.png", desc: "Image-2", id:'2'},
    { img: "/assets/3.png", desc: "Image-3", id:'3'},
    { img: "/assets/4.png", desc: "Image-4", id:'4'},
    { img: "/assets/5.png", desc: "Image-5", id:'5'},
    { img: "/assets/6.png", desc: "Image-6", id:'6'},
    { img: "/assets/7.png", desc: "Image-7", id:'7'},
    { img: "/assets/1.png", desc: "Image-1", id:'1'},
    { img: "/assets/2.png", desc: "Image-2", id:'2'},
    { img: "/assets/3.png", desc: "Image-3", id:'3'},
    { img: "/assets/4.png", desc: "Image-4", id:'4'},
    { img: "/assets/5.png", desc: "Image-5", id:'5'},
    { img: "/assets/6.png", desc: "Image-6", id:'6'},
    { img: "/assets/7.png", desc: "Image-7", id:'7'},
  ];

  return (
    <div style={container}>
      <Section title="Recomended" data={recomended}/>
      <Section title="Best Sellers" data={recomended}/>
      <Section title="Explore More" data={recomended}/>
    </div>
  );
}
