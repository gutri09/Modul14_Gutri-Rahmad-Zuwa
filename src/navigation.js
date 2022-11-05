import React from 'react'
import {Link } from 'react-router-dom';

const navigationStyle = {
    backgroundColor:'#81B622', marginBottom: '50px', boxShadow: '0 10px 8px 0 rgba(0, 0, 0, 0.2)', padding:'30px', position:'sticky', top: '0', marginTop:'0'
}
const labelStyle ={
    fontSize: '18px', fontWeight: '400', textDecoration: 'none', color:'white', padding: '30px'
}

const navigation = () => {
  return (
    <ul className="App-header" style={navigationStyle}>
        <li style={{display:'inline'}}>
        <Link to="/" style={labelStyle}>Home</Link>
        </li>
        <li style={{display:'inline'}}>
        <Link to="/about" style={labelStyle}>About Us</Link>
        </li>
        <li style={{display:'inline'}}>
        <Link to="/contact" style={labelStyle}>Contact Us</Link>
        </li>
  </ul>
  )
}

export default navigation
