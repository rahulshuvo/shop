import React from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import './index.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownOutlinedIcon/>
          </div>
          <div className="item">
            <Link className='link' to='/products/1'>Men</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/2'>Women</Link>
          </div>
          <div className="item">
            <Link className="link" to='/products/3'>Children</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/3'>Accessories</Link>
          </div>
        </div>
        <div className="center">
          <Link className='link' to='/'>Shop!!</Link>
        </div>
        <div className="right">
        <div className="item">
            <Link className='link' to='/products/1'>Homepage</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/1'>about</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/1'>Contact</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/1'>Stores</Link>
          </div>
          <div className="icons">
            <SearchOutlinedIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon/>
              <span>0</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar