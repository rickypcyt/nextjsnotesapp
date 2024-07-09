// pages/index.tsx
import styles from './Home.css'; // Importar estilos CSS
import React from 'react';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftBox}></div> {/* Cuadro a la izquierda */}
      <div className={styles.content}>
        <h1>Hello, World!</h1>
        <p>This is a simple Next.js page with a box on the left.</p>
      </div>
    </div>
  );
};

export default HomePage;
