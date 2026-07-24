import React, { useEffect } from 'react';
import Header from '../Header/Header';
import styles from './MainLayout.module.css';

export default function MainLayout({ children, showHeader = true }) {
  
  // Restaura a cor primária do localStorage sempre que qualquer tela com o MainLayout carregar ou sofrer F5
  useEffect(() => {
    const savedColor = localStorage.getItem('@Mag:primaryColour');
    if (savedColor) {
      document.documentElement.style.setProperty('--color-primary', savedColor);
    }
  }, []);

  return (
    <div className={styles.pageContainer}>
      {showHeader && <Header />}
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}