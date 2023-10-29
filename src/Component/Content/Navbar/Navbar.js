import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import Logout from '../../Logout/Logout'
const Navbar = () => {
  const [activeNav, setActiveNav] = useState('home');

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () =>{
      setSidebarOpen(!sidebarOpen);
  }


  const handleClick = (menuItem) => {
      setActiveNav(menuItem);
  };




  return (
     
  <>
   <div className="bars" onClick={toggleSidebar}>
   <i class='bx bx-menu'></i>
   </div>
   

    <div className={`navbar-section ${sidebarOpen ? "open" : ""}`}>
    
      <div className="menus">
              <i className="bx bx-x" onClick={toggleSidebar}></i>
              <NavLink to='/' className={activeNav === 'home' ? 'active-link' : ''} onClick={() => handleClick('home')}  ><i class='bx bx-home-alt-2'></i> <p>Home</p> </NavLink>
              <NavLink to='/notification' className={activeNav === 'notifications' ? 'active-link' : ''} onClick={() => handleClick('notifications')} ><i class='bx bx-bell'></i> <p>Notifications</p> </NavLink>
              <NavLink to='/shop'  className={activeNav === 'shop' ? 'active-link' : ''} onClick={() => handleClick('shop')} ><i class='bx bx-heart'></i> <p>Shop</p> </NavLink>
              <NavLink to='/conversation'  className={activeNav === 'conversation' ? 'active-link' : ''} onClick={() => handleClick('conversation')}><i class='bx bx-message-square-dots'></i> <p>Conversation</p> </NavLink>
              <NavLink to='/wallet'  className={activeNav === 'wallet' ? 'active-link' : ''} onClick={() => handleClick('wallet')}><i class='bx bx-wallet-alt'></i> <p>Wallet</p> </NavLink>
              <NavLink to='/subscription'  className={activeNav === 'subscription' ? 'active-link' : ''} onClick={() => handleClick('subscription')}><i class='bx bx-star' ></i> <p>Subscription</p> </NavLink>
              <NavLink to='/profile'  className={activeNav === 'profile' ? 'active-link' : ''} onClick={() => handleClick('profile')}><i class='bx bx-user'></i> <p> <span>My </span> Profile</p> </NavLink>
              <NavLink to='/settings'  className={activeNav === 'settings' ? 'active-link' : ''} onClick={() => handleClick('settings')}><i class='bx bx-cog'></i> <p>Settings</p> </NavLink>

    
      </div>
      
     <Logout />
     <div className="footer flex">
      <div className="coypright">2023 &copy; LogoName</div>
      <div className="dev">Developed By Sonaji Bhosle</div>

     </div>
    </div>
  </>

  )
}

export default Navbar