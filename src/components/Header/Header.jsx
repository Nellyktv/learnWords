
import logo from './logo.png'
import './Header.css';
import React from "react";
import {
  Link
} from "react-router-dom";


export default function Navigation() {
    return (
      <>
      <header className='header'>
      <Link to="/"><img className='logo' src={logo}  alt="logo" /></Link>
        <nav className='navigation'>
              <Link to="/">Main</Link>
              <Link to="/card">CardWords</Link>
        </nav>
        </header>
        </>
  )
}
