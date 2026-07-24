import Header from '../Header/Header';
import styles from './MainLayout.module.css';

export default function MainLayout({ children, showHeader = true }) {
  return (
    <div className={styles.pageContainer}>
      {showHeader && <Header />}
      
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}