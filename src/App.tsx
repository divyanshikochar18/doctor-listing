import React, { useState } from 'react';
import './App.css';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  image: string;
}

function App() {
  const [doctors] = useState<Doctor[]>([
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      experience: "15 years",
      rating: 4.8,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      experience: "12 years",
      rating: 4.9,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      experience: "8 years",
      rating: 4.7,
      image: "https://via.placeholder.com/150"
    }
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Find Your Doctor</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search by name or specialty..." />
          <button>Search</button>
        </div>
      </header>
      
      <main className="doctor-list">
        {doctors.map(doctor => (
          <div key={doctor.id} className="doctor-card">
            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
            <div className="doctor-info">
              <h2>{doctor.name}</h2>
              <p className="specialty">{doctor.specialty}</p>
              <p className="experience">Experience: {doctor.experience}</p>
              <div className="rating">
                <span>Rating: {doctor.rating}</span>
                <span className="stars">{"★".repeat(Math.floor(doctor.rating))}</span>
              </div>
              <button className="book-appointment">Book Appointment</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
