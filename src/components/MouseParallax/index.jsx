import React from 'react'
import styles from './mouseParallax.module.css'
import { useRef, useEffect } from 'react';
export default function index() {

  let square = useRef();
  let eyeball = useRef();

  useEffect(() => {
  document.addEventListener('mousemove', event => {
    const posX = event.clientX - window.innerWidth / 2;
    const posY = event.clientY - window.innerHeight / 2;

      if (square !== null && eyeball !== null) {
        square.current.style.transform = `translate(${posX * 0.01}%, ${posY * 0.01}%)`;
        eyeball.current.style.transform = `translate(${posX * 0.08}%, ${posY * 0.08}%)`;
      }
    });
  }, []);

  return (
    <div className={styles.square} ref={square}>
      <div className={styles.eyeball} ref={eyeball}></div>
    </div>
  )
};