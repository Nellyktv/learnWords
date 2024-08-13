import styles from './Header.module.css';
import logo from './logo.png'
import React from "react";
import {
  Link,
  useLocation
} from "react-router-dom";


export default function Navigation() {

  let location = useLocation().pathname;

  return (
    <>
      {(location === '/') || (location === '/game') ?
        <header className={styles.header}>
          <Link to="/"><img className={styles.logo} src={logo} alt="logo" /></Link>
          <nav className={styles.navigation}>
            <Link to="/">Main</Link>
            <Link to="/game">Game</Link>
          </nav>
        </header>
        : ''}
    </>
  )
}
