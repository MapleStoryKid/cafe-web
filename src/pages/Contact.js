import React from "react";
import { motion } from 'framer-motion';
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";


function Contact() {
  return (
    <motion.div className="contact"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <wrapper>
          <label >전화번호:</label>
          <div className="detailInfo">010-9375-2027</div>
          <label >주소:</label>
          <div className="detailInfo">경기도 양평군 옥천면 신복길 129 펠리시아 카페</div>
          <label >영업시간:</label>
          <div className="detailInfo">10:00 - 21:00 (정기 휴무: 월요일)</div>


        </wrapper>
      </div>
    </motion.div>
  );
}

export default Contact;