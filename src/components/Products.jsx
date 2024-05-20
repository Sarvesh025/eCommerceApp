import React from "react";
import Section from "./Section";

const container = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
};

export default function Products() {
  const recomended = [
    { img: "../src/assets/1.png", desc: "Image-1", id:'1'},
    { img: "../src/assets/2.png", desc: "Image-2", id:'2'},
    { img: "../src/assets/3.png", desc: "Image-3", id:'3'},
    { img: "../src/assets/4.png", desc: "Image-4", id:'4'},
    { img: "../src/assets/5.png", desc: "Image-5", id:'5'},
    { img: "../src/assets/6.png", desc: "Image-6", id:'6'},
    { img: "../src/assets/7.png", desc: "Image-7", id:'7'},
  ];

  return (
    <div style={container}>
      <Section title="Recomended" data={recomended}/>
      <Section title="Best Sellers" data={recomended}/>
      <Section title="Explore More" data={recomended}/>
    </div>
  );
}
