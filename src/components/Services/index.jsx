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
      design:'assets/1.png',
      name: '',
      id:'',
      price: 0
    },
    {
      design:'assets/1.png',
      name: '',
      id:'',
      price: 0
    },
    {
      design:'assets/1.png',
      name: '',
      id:'',
      price: 0
    }
  ];

  const women = [
    {
      design:'assets/1.png',
      desc: '',
      id:'',
      price: 0
    },
    {
      design:'assets/1.png',
      desc: '',
      id:'',
      price: 0
    },
    {
      design:'assets/1.png',
      desc: '',
      id:'',
      price: 0
    }
  ];
  const kids = [
    {
      design:'assets/1.png',
      desc: '',
      id:'',
      price: 0
    },
    {
      design:'assets/1.png',
      desc: '',
      id:'',
      price: 0
    },
    {
      design:'assets/1.png',
      desc: '',
      id:'',
      price: 0
    }
  ];
  const couples = [
    {
      design:'assets/1.png',
      desc: '',
      id:'',
      price: 0
    },
    {
      design:'assets/1.png',
      desc: '',
      id:'',
      price: 0
    },
    {
      design:'assets/1.png',
      desc: '',
      id:'',
      price: 0
    }
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
