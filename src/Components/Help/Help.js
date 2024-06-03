import React from 'react'
import './Help.css'

function Help() {
  return (
    <div className='help ' >
        <div className='d-flex justify-content-center p-5'>
        <input type='text' className='col-12 col-md-10' placeholder='Search'/>
        </div>
        <hr />
        <h6 className='p-5 pb-1'> Recommeded Topics </h6>
      <ul className='list-unstyled p-sm-5 p-1 p-'>
        <li className='p-5 pt-0 pb-3'> <a href=''> Order with Free Shipping </a></li>
        <li className='p-5 pt-0 pb-3'> <a href=''> Courier Contact Information </a></li>
        <li className='p-5 pt-0 pb-3'> <a href=''> Return Policies </a></li>
        <li className='p-5 pt-0 pb-3'> <a href=''> Refunds </a></li>
        <li className='p-5 pt-0 pb-3'> <a href=''> Cash on Delivery </a></li>
        <li className='p-5 pt-0 pb-3'> <a href=''> Account Settings </a></li>
        <li className='p-5 pt-0 pb-3'> <a href=''> Redeem Gift Cards </a></li>
        <li className='p-5 pt-0 pb-3'> <a href=''> Refunds </a></li>
        <li className='p-5 pt-0 pb-3'> <a href=''> Shipping and Delivery </a></li>
        <li className='p-5 pt-0 pb-3'> <a href=''> Track your Shipment </a></li>
        <li className='p-5 pt-0 pb-3'> <a href=''> Manage your Payment Methods </a></li>
        <li className='p-5 pt-0 pb-3'> <a href=''> Gift card balance </a></li>
        <li className='p-5 pt-0 pb-3'> <a href=''> Address Book </a></li>
      </ul>
    </div>
  )
}

export default Help
