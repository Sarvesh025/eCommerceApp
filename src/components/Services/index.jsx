import React, { useEffect } from 'react'
import Card from './Card'
import styles from './services.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaMale, FaFemale, FaChild } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";

export default function services() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, []);

  const men = [
    {
      img:"/assets/1.png",
      name:'men name-1',
      desc: 'description-1',
      id:'1',
      price: 100,
      offer: 20
    },
    {
      img:"/assets/1.png",
      name:'men name-2',
      desc: 'description-2',
      id:'2',
      price: 100,
      offer: 30
    },
    {
      img:"/assets/1.png",
      name:'men name-3',
      desc: 'description-3',
      id:'3',
      price: 100,
      offer: 50
    },
    {
      img:"/assets/1.png",
      name:'men name-1',
      desc: 'description-1',
      id:'4',
      price: 100,
      offer: 20
    },
    {
      img:"/assets/1.png",
      name:'men name-2',
      desc: 'description-2',
      id:'5',
      price: 100,
      offer: 30
    },
    {
      img:"/assets/1.png",
      name:'men name-3',
      desc: 'description-3',
      id:'6',
      price: 100,
      offer: 50
    },
    {
      img:"/assets/1.png",
      name:'men name-1',
      desc: 'description-1',
      id:'7',
      price: 100,
      offer: 20
    },
    {
      img:"/assets/1.png",
      name:'men name-2',
      desc: 'description-2',
      id:'8',
      price: 100,
      offer: 30
    },
    {
      img:"/assets/1.png",
      name:'men name-3',
      desc: 'description-3',
      id:'9',
      price: 100,
      offer: 50
    },
    {
      img:"/assets/1.png",
      name:'men name-1',
      desc: 'description-1',
      id:'10',
      price: 100,
      offer: 20
    },
  ];

  const women = [
    {
      img:"/assets/1.png",
      name:'women name-1',
      desc: 'description-1',
      id:'1',
      price: 100,
      offer: 20
    },
    {
      img:"/assets/1.png",
      name:'women name-2',
      desc: 'description-2',
      id:'2',
      price: 100,
      offer: 30
    },
    {
      img:"/assets/1.png",
      name:'women name-3',
      desc: 'description-3',
      id:'3',
      price: 100,
      offer: 50
    },
    {
      img:"/assets/1.png",
      name:'women name-1',
      desc: 'description-1',
      id:'4',
      price: 100,
      offer: 20
    },
    {
      img:"/assets/1.png",
      name:'women name-2',
      desc: 'description-2',
      id:'5',
      price: 100,
      offer: 30
    },
    {
      img:"/assets/1.png",
      name:'women name-3',
      desc: 'description-3',
      id:'6',
      price: 100,
      offer: 50
    },
    {
      img:"/assets/1.png",
      name:'kid name-1',
      desc: 'description-1',
      id:'7',
      price: 100,
      offer: 20
    },
    {
      img:"/assets/1.png",
      name:'women name-2',
      desc: 'description-2',
      id:'8',
      price: 100,
      offer: 30
    },
    {
      img:"/assets/1.png",
      name:'women name-3',
      desc: 'description-3',
      id:'9',
      price: 100,
      offer: 50
    },
    {
      img:"/assets/1.png",
      name:'women name-1',
      desc: 'description-1',
      id:'10',
      price: 100,
      offer: 20
    },
  ];

  const kids = [
    {
      img:"/assets/1.png",
      name:'kid name-1',
      desc: 'description-1',
      id:'1',
      price: 100,
      offer: 20
    },
    {
      img:"/assets/1.png",
      name:'kid name-2',
      desc: 'description-2',
      id:'2',
      price: 100,
      offer: 30
    },
    {
      img:"/assets/1.png",
      name:'kid name-3',
      desc: 'description-3',
      id:'3',
      price: 100,
      offer: 50
    },
    {
      img:"/assets/1.png",
      name:'kid name-1',
      desc: 'description-1',
      id:'4',
      price: 100,
      offer: 20
    },
    {
      img:"/assets/1.png",
      name:'kid name-2',
      desc: 'description-2',
      id:'5',
      price: 100,
      offer: 30
    },
    {
      img:"/assets/1.png",
      name:'kid name-3',
      desc: 'description-3',
      id:'6',
      price: 100,
      offer: 50
    },
    {
      img:"/assets/1.png",
      name:'kid name-1',
      desc: 'description-1',
      id:'7',
      price: 100,
      offer: 20
    },
    {
      img:"/assets/1.png",
      name:'kid name-2',
      desc: 'description-2',
      id:'8',
      price: 100,
      offer: 30
    },
    {
      img:"/assets/1.png",
      name:'kid name-3',
      desc: 'description-3',
      id:'9',
      price: 100,
      offer: 50
    },
    {
      img:"/assets/1.png",
      name:'kid name-1',
      desc: 'description-1',
      id:'10',
      price: 100,
      offer: 20
    },
  ];
  const couples = [
    {
      img:"/assets/1.png",
      name:'couple name-1',
      desc: 'description-1',
      id:'1',
      price: 100,
      offer: 20
    },
    {
      img:"/assets/1.png",
      name:'couple name-2',
      desc: 'description-2',
      id:'2',
      price: 100,
      offer: 30
    },
    {
      img:"/assets/1.png",
      name:'couple name-3',
      desc: 'description-3',
      id:'3',
      price: 100,
      offer: 50
    },
    {
      img:"/assets/1.png",
      name:'couple name-1',
      desc: 'description-1',
      id:'4',
      price: 100,
      offer: 20
    },
    {
      img:"/assets/1.png",
      name:'couple name-2',
      desc: 'description-2',
      id:'5',
      price: 100,
      offer: 30
    },
    {
      img:"/assets/1.png",
      name:'couple name-3',
      desc: 'description-3',
      id:'6',
      price: 100,
      offer: 50
    },
    {
      img:"/assets/1.png",
      name:'couple name-1',
      desc: 'description-1',
      id:'7',
      price: 100,
      offer: 20
    },
    {
      img:"/assets/1.png",
      name:'couple name-2',
      desc: 'description-2',
      id:'8',
      price: 100,
      offer: 30
    },
    {
      img:"/assets/1.png",
      name:'couple name-3',
      desc: 'description-3',
      id:'9',
      price: 100,
      offer: 50
    },
    {
      img:"/assets/1.png",
      name:'couple name-1',
      desc: 'description-1',
      id:'10',
      price: 100,
      offer: 20
    },
  ];


  return (
    <div className={styles.services}>
        <Card data={men} image={<FaMale style={{width:'100%', height:'80%'}}/>} scrollAnimation="fade-down-right" heading="MEN" content=" Polo Shirt, Sports wears, Sleeve Less, Sweatshirts, Hoodies, Varsity jackets etc"/>
        <Card data={women} image={<FaFemale style={{width:'100%', height:'80%'}}/>} scrollAnimation="fade-down-left" heading="WOMEN" content="Tank tops, Hoodies, T-shirts, Polo shirts, Maternity Tees, Crop tops, Ringer Tees, Formal Shirts"/>
        <Card data={kids} image={<FaChild style={{width:'100%', height:'80%'}}/>} scrollAnimation="fade-up-right" heading="KIDS" content="Rompers, Hoodies, Bibs, Blanket, T-shirts, Polo Shirts, Raglan full sleeve Tees for kids & babies"/>
        <Card data={couples} image={<GiLovers style={{width:'100%', height:'80%'}}/>} scrollAnimation="fade-up-left" heading="COUPLES" content="Tank tops, Hoodies, T-shirts, Polo shirts, Polo Shirt, Sports wears, Sleeve Less, Sweatshirts, Hoodies"/>
    </div>
  )
}
