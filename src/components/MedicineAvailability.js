// src/components/MedicineAvailability.js
import React from 'react';
import styles from './MedicineAvailability.module.css';

function MedicineAvailability() {
  return (
    <div className={styles.medicineAvailability}>
      <h2>Medicine Availability</h2>
      <p>Here you will be able to see the availability of medicines in nearby pharmacies.</p>
      {/* We'll add the actual functionality later */}
    </div>
  );
}

export default MedicineAvailability;