import React, { Component } from 'react';
import './layout.css';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
class Layout extends Component {
  state = {
    showNav:false
  }
  toggleNav(val){
    this.setState({
      showNav:val
    });

  }
  render() {
    return (
      <div>
        <Header showNav ={this.state.showNav} onHideNav ={()=>{this.toggleNav(false)}}
        onOpenNav ={()=>{this.toggleNav(true)}}
        />
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default Layout;