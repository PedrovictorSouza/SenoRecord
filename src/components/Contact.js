import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>CONTATO</h2>
      <form id="contactForm" className={styles.contactForm}>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Mensagem:</label>
        <textarea id="message" name="message" required></textarea>
        
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
