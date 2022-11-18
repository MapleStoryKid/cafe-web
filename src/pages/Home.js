import React from 'react'
import "../styles/Home.css";
import { Link } from 'react-router-dom';
import { motion,useScroll, useTransform} from 'framer-motion';
import coffeBean from "../assets/coffee-1324126_1280.jpg";
import inSideRoom from "../assets/food-2940553_1280.jpg";


function Home() {

  const { scrollY } = useScroll();
  const textEffect1 = useTransform(scrollY, [500, 800], [0, 600]);
  const textEffect2 = useTransform(scrollY, [1000, 1300], [900, 300]);
  const Effect = useTransform(scrollY, ["100%", 0], [0, 1000]);
  return (
    <motion.div
    className='home'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
      <motion.div className="homeContainer"
      style={{ opacity: Effect }}>
      <motion.h1>Felicia Cafe</motion.h1>
        <motion.p>양평 최고의 조경 카페</motion.p>
        <Link to="/menu">
          <motion.button> 시그니쳐 메뉴 </motion.button>
        </Link>
      </motion.div>
      <motion.div className="homeContainer"
      style={{backgroundImage:  `url(${coffeBean})`}}>
      <motion.h1
        style={{ x: textEffect1 }}>Quality</motion.h1>
        <motion.p
        style={{ x: textEffect1 }}>엄선한 카페 원두</motion.p>
      </motion.div>
      <motion.div className="homeContainer"
      style={{backgroundImage:  `url(${inSideRoom})`}}>
      <motion.h1
        style={{ x: textEffect2 }}>Comfortble</motion.h1>
        <motion.p
        style={{ x: textEffect2 }}>편안하게 휴식하는 공간</motion.p>
      </motion.div>
    </motion.div>
    
  )
}

export default Home
