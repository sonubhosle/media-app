import React from 'react'
import { Link } from 'react-router-dom'
import { TbAdjustmentsHorizontal } from 'react-icons/tb'
import './Header.css'
const Header = () => {
    return (
        <div className='header flex'>
            <div className="logo flex">
                <Link to='/'>LOGO</Link>
            </div>
            <div className="search flex">
                <div className='icon'><i class='bx bx-search'></i></div>
                <input className='search-box' type="text" placeholder='Search Here...' />
                <div className="icon">
                    <TbAdjustmentsHorizontal />
                </div>
                <p> Filters</p>
            </div>
            <div className="box flex">
                <p> Become a Seller</p>
            </div>
        </div>
    )
}

export default Header