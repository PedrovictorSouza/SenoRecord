import React, { useEffect, useRef } from 'react';
import styles from './Artists.module.css';

const Artists = ({ artists }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <section id="artists" className={styles.artists}>
      <h1 id="artists-section-title">ARTISTAS DO SELO</h1>
      <div ref={containerRef} className={styles.artistContainer}>
        {artists.map((artist, index) => (
          <div
            key={index}
            className={styles.artist}
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/artists/${index + 1}.png)` }}
          >
            <div className={styles.artistContent}>
              <h3>{artist.name}</h3>
              <p>{artist.description}</p>
              <a href={artist.spotify} target="_blank" rel="noopener noreferrer">
                Ouça no Spotify
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Artists;
