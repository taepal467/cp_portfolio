import {motion} from 'framer-motion';
import {useState, useEffect} from 'react';

export default function Cursor() {

    const [mousePosition, setMousePosition] = useState({
        y:0,
        x:0
      });
 
      useEffect(() => {
        const mouseMove = (e) => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY
          })
        }
  
        window.addEventListener('mousemove', mouseMove)
  
        return () => {
          window.removeEventListener('mousemove', mouseMove)
        }
      },[]);
  
      const variants = {
        default: {
          x: mousePosition.x ,
          y: mousePosition.y 
        }
      }

    return (
        <motion.div 
        className='cursor bg-black h-5 w-5 rounded-full fixed top-0 left-0 opacity-60 dark:bg-champagne'
        variants={variants}
        animate='default'>
        </motion.div>
    );
}