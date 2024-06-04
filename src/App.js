import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Artists from './components/Artists';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const galleryItems = [
  { image: '/artists/1.png', alt: 'Foto 1', text: 'Descrição da Foto 1' },
  { image: '/artists/2.png', alt: 'Foto 2', text: 'Descrição da Foto 2' },
  { image: '/artists/3.png', alt: 'Foto 1', text: 'Descrição da Foto 1' },
  { image: '/artists/4.png', alt: 'Foto 2', text: 'Descrição da Foto 2' },
  { image: '/artists/5.png', alt: 'Foto 1', text: 'Descrição da Foto 1' },
  { image: '/artists/6.png', alt: 'Foto 2', text: 'Descrição da Foto 2' },
  { image: '/artists/7.png', alt: 'Foto 1', text: 'Descrição da Foto 1' },
  { image: '/artists/8.png', alt: 'Foto 2', text: 'Descrição da Foto 2' },
  { image: '/artists/9.png', alt: 'Foto 1', text: 'Descrição da Foto 1' },
  // Adicione mais itens conforme necessário
];

const artistItems = [
  { image: 'artists/01.jpg', name: 'Artista 1', description: 'Descrição do Artista 1', spotify: 'https://spotify.com' },
  { image: 'img/artist2.jpg', name: 'Artista 2', description: 'Descrição do Artista 2', spotify: 'https://spotify.com' },
  { image: 'img/artist2.jpg', name: 'Artista 2', description: 'Descrição do Artista 2', spotify: 'https://spotify.com' },
  { image: 'img/artist2.jpg', name: 'Artista 2', description: 'Descrição do Artista 2', spotify: 'https://spotify.com' },
  { image: 'img/artist2.jpg', name: 'Artista 2', description: 'Descrição do Artista 2', spotify: 'https://spotify.com' },
  { image: 'img/artist2.jpg', name: 'Artista 2', description: 'Descrição do Artista 2', spotify: 'https://spotify.com' },
  { image: 'img/artist2.jpg', name: 'Artista 2', description: 'Descrição do Artista 2', spotify: 'https://spotify.com' },
  { image: 'img/artist2.jpg', name: 'Artista 2', description: 'Descrição do Artista 2', spotify: 'https://spotify.com' },
  { image: 'img/artist2.jpg', name: 'Artista 2', description: 'Descrição do Artista 2', spotify: 'https://spotify.com' },
  // Adicione mais artistas conforme necessário
];

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Artists artists={artistItems} />
      <Gallery items={galleryItems} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
