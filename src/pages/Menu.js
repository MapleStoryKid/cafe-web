import React from 'react'
import MenuItem from '../components/MenuItem'
import { MenuList } from '../helpers/MenuList'
import "../styles/Menu.css";
import { motion } from 'framer-motion';

function Menu() {
  return (
    <motion.div className='menu'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
        <h1 className='menuTitle'>Best Selleres</h1>
        <div className='menuList'>
            {MenuList.map((menuItem, key) => {
                return <MenuItem key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price} detail={menuItem.detail}/>
            })}
        </div>
      
    </motion.div>
  )
}

export default Menu
