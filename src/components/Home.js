// src/components/Home.js
import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <h1>Welcome to MediTrack</h1>
      <p>Track medicine availability and schedule your medications.</p>
    </div>
  );
}

export default Home;