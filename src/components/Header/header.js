import React from 'react';
import style from './header.css';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Sidenav from './Sidenav/sidenav';
const Header = (props) => {

  const navbars = () => (
    <div className={style.bars}>
        <FontAwesome name="bars" style={{
          color:'#dfdfdf',
          padding:'10px',
          cursor:'pointer'
        }} onClick={props.onOpenNav}/>
    </div>
  )
  const logo = () => {
     return(
       <Link to='/' className={style.logo}>
       <img alt='logo' src="/images/nba_logo.png"/>
       </Link>
     );
  }
    return (
      <header className={style.header}>
        <Sidenav {...props}/>
        <div className ={style.headerOpt}>
          {logo()}
          {navbars()}
        </div>
      </header>
    );
  
}

export default Header;