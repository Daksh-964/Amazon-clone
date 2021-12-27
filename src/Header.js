import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Link to="/">
            <img className='header__logo' src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/large-images-amazon-png-logo-vector-7.png3ft3d1416935166817' />
            </Link>
            <div className='header__search'>
                <input className='header__searchInput' type='text'></input>
                <SearchIcon className='header__searchIcons' />
                {/* logo*/}
            </div>
            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello Guest</span>
                    <span className='header__optionLineTwo'>Sign in</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>Orders</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
                <Link to="/Checkout">
                <div className='header__optionBasket'>
                    <ShoppingBasket />
                    <span className='header__optionLineTwo header__basketCount'>0</span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
