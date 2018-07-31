import React from 'react';
import SideNav from 'react-simple-sidenav';
import NavItems from './navitems';

const Sidenav = (props) => {
    return (
      <div>
        <SideNav showNav = {props.showNav} onHideNav={props.onHideNav}
        navStyle={{
          background:'#242424',
          maxWidth:'220px'

        }}>
        <NavItems></NavItems>
        </SideNav>
      </div>
    );
}

export default Sidenav;