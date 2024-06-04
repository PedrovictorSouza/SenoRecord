import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <img src="/SeloLogo-Vertical.png" alt="Seno Records Logo" className={styles.logo} />
      <nav>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          ☰
        </div>
        <ul className={isOpen ? `${styles.navLinks} ${styles.open}` : styles.navLinks}>
          <li><a href="#home">HOME</a></li>
          <li><a href="#artists">ARTISTAS</a></li>
          <li><a href="#gallery">GALERIA</a></li>
          <li><a href="#contact">CONTATO</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
