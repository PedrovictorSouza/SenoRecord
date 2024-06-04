import React from 'react';
import styles from './Gallery.module.css';

const Gallery = ({ items }) => {
  return (
    <section id="gallery" className={styles.gallery}>
      <h1 style={{ color: 'white' }}>GALERIA</h1>
      <div className={styles.galleryContainer}>
        {items.map((item, index) => (
          <div key={index} className={styles.galleryItem}>
            <img src={item.image} alt={item.alt} className={styles.galleryImage} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
