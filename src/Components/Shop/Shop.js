import React, { useEffect, useState } from 'react'
import './Shop.css'
import { getAllProducts } from '../APIServices/Api';
import ShopSideBar from './ShopSideBar';
import MenClothing from './MenClothing';

function Shop() {
  
  return (
    <div className='shop'>
      <MenClothing />
    </div>
  )
}

export default Shop
