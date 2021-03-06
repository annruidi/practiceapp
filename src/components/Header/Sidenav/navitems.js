import React from 'react';
import style from './sidenav.css';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const NavItems = () => {

  const items =[
    {
      type:style.option,
      icon:'home',
      text:'Home',
      link:'/'

    },
    {
      type:style.option,
      icon:'file-text-o',
      text:'News',
      link:'/news'

    }
    ,
    {
      type:style.option,
      icon:'play',
      text:'Videos',
      link:'/videos'

    }
    ,
    {
      type:style.option,
      icon:'sign-in',
      text:'Sign in',
      link:'/signin'

    }
    ,
    {
      type:style.option,
      icon:'sign-out',
      text:'Sign out',
      link:'/signout'

    }
  ];

  const showItems = () => {
    return items.map((item, i) => (
      <div className ={item.type} key={i}>
      <Link to={item.link}>
      <FontAwesome name={item.icon}/>
       {item.text}
      </Link>
    </div>
  ));
  }
    return(
     
      <div>{showItems()}</div>
    )
      
    };


export default NavItems;