import React, { useEffect } from 'react'
import styles from './blog.module.css'
import MouseParallax from '../../components/MouseParallax/index'
import Card from './Card/index'


const cardlist = [{
  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi vel aliquam bibendum, nunc nisl tincidunt tellus, ac commodo nisi ante quis nisi. Nullam euismod, nunc vel aliquam bibendum, nunc nisl tincidunt tellus, ac commodo nisi ante quis nisi. Sed euismod, nisi vel aliquam bibendum, nunc nisl tincidunt tellus, ac commodo nisi ante quis nisi. Nullam euismod, nunc vel aliquam bibendum, nunc nisl tincidunt tellus, ac commodo nisi ante quis nisi.`,
  thumbnail: "https://mspoweruser.com/wp-content/uploads/2023/11/t-shirt-design-software-for-PCs.jpg",
},
{
  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi vel aliquam bibendum, nunc nisl tincidunt tellus, ac commodo nisi ante quis nisi. Nullam euismod, nunc vel aliquam bibendum, nunc nisl tincidunt tellus, ac commodo nisi ante quis nisi. Sed euismod, nisi vel aliquam bibendum, nunc nisl tincidunt tellus, ac commodo nisi ante quis nisi. Nullam euismod, nunc vel aliquam bibendum, nunc nisl tincidunt tellus, ac commodo nisi ante quis nisi.`,
  thumbnail: "https://mspoweruser.com/wp-content/uploads/2023/11/t-shirt-design-software-for-PCs.jpg",
},
{
  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi vel aliquam bibendum, nunc nisl tincidunt tellus, ac commodo nisi ante quis nisi. Nullam euismod, nunc vel aliquam bibendum, nunc nisl tincidunt tellus, ac commodo nisi ante quis nisi. Sed euismod, nisi vel aliquam bibendum, nunc nisl tincidunt tellus, ac commodo nisi ante quis nisi. Nullam euismod, nunc vel aliquam bibendum, nunc nisl tincidunt tellus, ac commodo nisi ante quis nisi.`,
  thumbnail: "https://mspoweruser.com/wp-content/uploads/2023/11/t-shirt-design-software-for-PCs.jpg",
}
]



export default function index() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const windowWidth = window.innerHeight

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (

    <div className={styles.ourBlog}
      style={{
        backgroundImage: `radial-gradient( circle at ${mousePosition.x}px ${mousePosition.y}px, grey, black  40%)`
      }}>
      {/* <MouseParallax/>
        <MouseParallax/> */}

      <h1>Our Blog</h1>
      {cardlist.map((item, index) => {
        return (
          <>
            <Card
              key={index}
              title={item.title}
              description={item.description}
              thumbnail={item.thumbnail}
            />
          </>
        )
      })}

    </div>
  )
}

