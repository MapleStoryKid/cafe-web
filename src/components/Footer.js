import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from "@mui/icons-material/Facebook";
import "../styles/Footer.css";



function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
          <a href='https://www.instagram.com/felicia__cafe/'><InstagramIcon /></a>  <FacebookIcon /> 
        </div>
        <p>
            &copy: 2022 Felicia.com
        </p>
      
    </div>
  )
}

export default Footer
