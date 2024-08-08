// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar({ userRole }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MediTrack</div>
      <ul className={styles.navLinks}>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/availability">Medicine Availability</Link></li>
        <li><Link to="/schedule">Medication Schedule</Link></li>
        <li><Link to="/profile">My Profile</Link></li>
        {userRole === 'admin' && <li><Link to="/admin">Admin Panel</Link></li>}
      </ul>
    </nav>
  );
}

export default Navbar;