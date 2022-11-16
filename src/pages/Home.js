import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from "../assets/street-cafe-4472312_1920.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="headerContainer"
      style={{backgroundImage: `url(${BannerImage})`}}>
        <h1>Felicia cafe</h1>
        <p>양평 최고의 힐링 카페</p>
        <Link to="/menu">
          <button> 시그니쳐 메뉴 </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
