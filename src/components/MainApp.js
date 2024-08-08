// src/components/MainApp.js
import React, { useState, useEffect } from 'react';

const medications = [
  { name: "Aspirin", time: "08:00 AM" },
  { name: "Vitamin C", time: "12:00 PM" },
  { name: "Ibuprofen", time: "06:00 PM" }
];

function MainApp({ onLogout, currentUser }) {
  const [medicationList, setMedicationList] = useState([]);

  useEffect(() => {
    setMedicationList(medications);
  }, []);

  const findMedicine = () => {
    alert("Navigating to Find Medicine page");
  };

  const viewSchedule = () => {
    alert("Navigating to My Schedule page");
  };

  const nearbyPharmacies = () => {
    alert("Navigating to Nearby Pharmacies page");
  };

  return (
    <div className="container">
      <header>
        <h1>MediTrack</h1>
        <button onClick={onLogout} className="logout-button">Logout</button>
      </header>
      <div className="main-buttons">
        <button className="main-button" onClick={findMedicine}>Find Medicine</button>
        <button className="main-button" onClick={viewSchedule}>My Schedule</button>
        <button className="main-button" onClick={nearbyPharmacies}>Nearby Pharmacies</button>
      </div>
      <div className="schedule">
        <h2>Today's Schedule</h2>
        <div id="medicationList">
          {medicationList.map((med, index) => (
            <div key={index} className="medication-item">
              <span>{med.name}</span>
              <span>{med.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainApp;