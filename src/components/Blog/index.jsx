import React, { useEffect } from 'react'
import styles from './blog.module.css'
import MouseParallax from '../../components/MouseParallax/index'
import Card from './Card/index'


const cardlist = [{
  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi vel aliquam bibendum, nunc nisl tincidunt tellus, ac commodo nisi ante quis nisi. Nullam euismod, nunc vel aliquam bibendum, nunc nisl tincidunt tellus, ac commodo nisi ante quis nisi. Sed euismod, nisi vel aliquam bibendum, nunc nisl tincidunt tellus, ac commodo nisi ante quis nisi. Nullam euismod, nunc vel aliquam bibendum, nunc nisl tincidunt tellus, ac commodo nisi ante quis nisi.`,
  thumbnail: "https://mspoweruser.com/wp-content/uploads/2023/11/t-shirt-design-software-for-PCs.jpg",
  imgPos: "1/1",
  detailPos: "1/2",
  btnPos: 'end'
},
{
  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi vel aliquam bibendum, nunc nisl tincidunt tellus, ac commodo nisi ante quis nisi. Nullam euismod, nunc vel aliquam bibendum, nunc nisl tincidunt tellus, ac commodo nisi ante quis nisi. Sed euismod, nisi vel aliquam bibendum, nunc nisl tincidunt tellus, ac commodo nisi ante quis nisi. Nullam euismod, nunc vel aliquam bibendum, nunc nisl tincidunt tellus, ac commodo nisi ante quis nisi.`,
  thumbnail: "https://mspoweruser.com/wp-content/uploads/2023/11/t-shirt-design-software-for-PCs.jpg",
  imgPos: "1/2",
  detailPos: "1/1",
  btnPos: 'start'

},
{
  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi vel aliquam bibendum, nunc nisl tincidunt tellus, ac commodo nisi ante quis nisi. Nullam euismod, nunc vel aliquam bibendum, nunc nisl tincidunt tellus, ac commodo nisi ante quis nisi. Sed euismod, nisi vel aliquam bibendum, nunc nisl tincidunt tellus, ac commodo nisi ante quis nisi. Nullam euismod, nunc vel aliquam bibendum, nunc nisl tincidunt tellus, ac commodo nisi ante quis nisi.`,
  thumbnail: "https://mspoweruser.com/wp-content/uploads/2023/11/t-shirt-design-software-for-PCs.jpg",
  imgPos: "1/1",
  detailPos: "1/2",
  btnPos: 'end'
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

      <h1 style={{ textAlign: 'center' }}>Our Blog</h1>
      {cardlist.map((item, index) => {
        return (
          <div key={index}>
            <Card
              key={index}
              title={item.title}
              description={item.description}
              thumbnail={item.thumbnail}
            />
          </div>
        )
      })}

    </div>
  )
}

