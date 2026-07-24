import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  // Pega os dados salvos do parceiro no localStorage
  const partnerLogo = localStorage.getItem('@Mag:partnerLogo');
  const partnerName = localStorage.getItem('@Mag:partnerName') || 'Partner';

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        {partnerLogo ? (
          <img src={partnerLogo} alt={partnerName} />
        ) : (
          <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{partnerName}</span>
        )}
      </div>
      
      <nav className={styles.navLinks}>
        <Link to="/products">Histórico de Cotações</Link>
      </nav>
    </header>
  );
}