import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [duration, setDuration] = useState(30);
  const [areaOfInterest, setAreaOfInterest] = useState('');
  const [premium, setPremium] = useState(false);
  const [cost, setCost] = useState(2000);

  useEffect(() => {
    // Fetch students and mentors (this can be replaced with API calls)
    setStudents([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ]);

    setMentors([
      { id: 1, name: 'Mentor A' },
      { id: 2, name: 'Mentor B' },
    ]);
  }, []);

  const handleSubmit = () => {
    const payload = {
      student: selectedStudent,
      mentor: selectedMentor,
      duration,
      areaOfInterest,
      premium,
      cost,
    };

    // This is where you'd normally make an API call
    console.log('Scheduling Data:', payload);
    alert('Session booked successfully!');
  };

  const handleDurationChange = (e) => {
    const selectedDuration = parseInt(e.target.value);
    setDuration(selectedDuration);

    // Update cost based on duration
    const newCost = selectedDuration === 30 ? 2000 : selectedDuration === 45 ? 3000 : 4000;
    setCost(newCost);
  };

  return (
    <div className="App">
      <h1>1x1 Mock Interview Scheduler</h1>

      <div className="form-group">
        <label>Select Student:</label>
        <select onChange={(e) => setSelectedStudent(e.target.value)}>
          <option value="">Select</option>
          {students.map((student) => (
            <option key={student.id} value={student.id}>{student.name}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Area of Interest:</label>
        <input type="text" onChange={(e) => setAreaOfInterest(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Select Mentor:</label>
        <select onChange={(e) => setSelectedMentor(e.target.value)}>
          <option value="">Select</option>
          {mentors.map((mentor) => (
            <option key={mentor.id} value={mentor.id}>{mentor.name}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Duration:</label>
        <select onChange={handleDurationChange}>
          <option value={30}>30 mins</option>
          <option value={45}>45 mins</option>
          <option value={60}>60 mins</option>
        </select>
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            checked={premium}
            onChange={(e) => setPremium(e.target.checked)}
          />
          Premium (Preferred Mentor)
        </label>
      </div>

      <div className="form-group">
        <label>Total Cost: ₹{premium ? cost + 500 : cost}</label>
      </div>

      <button onClick={handleSubmit}>Book Session</button>
    </div>
  );
}

export default App;
