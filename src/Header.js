/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text*/
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import MenuIcon from '@material-ui/icons/Menu';
import { FormControl, MenuItem, Select } from "@material-ui/core";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  } 

  function changeImage() {
    var image = document.getElementById('engl');
    if (image.src.match('germ')) {
        image.src = "https://image.flaticon.com/icons/svg/555/555526.svg";
    }
    else {
        image.src ="https://cdn.countryflags.com/thumbs/germany/flag-400.png";
    }
  }

  
  const [country, setCountry] = useState('choose');
  //const onCountryChange = (event => {
    //const countryCode = event.target.value;
    //setCountry(countryCode);
  //};

  return (
    <div className="header">
      <MenuIcon className="header__menu"/>
      <Link to="/">
        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <FormControl className="header__dropdown">
      {/*// onChange={onCountryChange} in Select */}
        <Select variant="outlined"  value={country}>
          <MenuItem value="choose">Choose</MenuItem>  
          <MenuItem value="canada"><img className="flag__canada" src="https://www.zdvo.org/wp-content/uploads/2018/04/ca-round.png"/>Canada</MenuItem>
          <MenuItem value="usa"> <img className="flag__usa" src="https://www.tuberides.de/flag/usa.png"/>USA</MenuItem>
          <MenuItem value="switzerland"><img className="flag__switzerland" src="https://lavylites.com/sitebuild/css/img/langs/ch.png"/>Switzerland</MenuItem>
          <MenuItem value="germany"><img className="flag__germany" src="https://findicons.com/files/icons/656/rounded_world_flags/256/germany.png"/>Germany</MenuItem>
          <MenuItem value="croatia"><img className="flag__croatia" src="https://abali.ru/wp-content/uploads/2011/09/Hrvatska_256x256.png"/>Croatia</MenuItem>
          <MenuItem value="madagaskar"><img className="flag__madagaskar" src="https://cdn.jsdelivr.net/emojione/assets/4.0/png/128/1f1f2-1f1ec.png"/>Madagaskar</MenuItem>
        </Select>
      </FormControl>
     

      <div className="header__lang">
        <img
          className="lang__engl"
          src="https://image.flaticon.com/icons/svg/555/555526.svg" id='engl' onClick={changeImage} value="Change"
          alt=""
        />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user? 'Gueast' : user.email.split('@')[0]}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;