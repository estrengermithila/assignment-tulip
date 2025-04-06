import React from 'react';
import { NavLink } from 'react-router-dom';
import fundingIcon from '../assets/ibrahim-rifath-OApHds2yEGQ-unsplash.jpg'

const Navbar = () => {
    const links = <>
    
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allCampaign'>All Campaign</NavLink></li>
    <li><NavLink to='/newCampaign'>Add New Campaign</NavLink></li>
    <li><NavLink to='/myCampaign'>My  Campaign</NavLink></li>
    <li><NavLink to='/myDonation'>My Donations</NavLink></li>
    
    </>

    const user = <>
    <button className='btn'><NavLink to='/login'>Login</NavLink></button>
    <button className='btn'><NavLink to='/register'>Register</NavLink></button>
    </>
    return (
        <div>
            <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg> */}
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
        
        
      </ul>
    </div>
    <img className='w-20 h-20 bg-transparent rounded-full' src={fundingIcon} alt="" srcset="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    
      
    </ul>
  </div>
  <div className="navbar-end gap-2">
    {user}
  </div>
</div>
        </div>
    );
};

export default Navbar;