import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  const backgroundImage = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/cover.png)`
  };

  return (
    <section id="home" className={styles.home} style={backgroundImage}>
      <img src={`${process.env.PUBLIC_URL}/globe.svg`} alt="Globo" className={styles.logo} />
      <img src={`${process.env.PUBLIC_URL}/logo-home-01.svg`} alt="Seno Records" className={styles.logoText} />
      <p>Seno Records é um selo musical dedicado a descobrir e promover novos talentos na música.</p>
    </section>
  );
}

export default Home;
