import React, { useState } from 'react';
import './App.css';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';


function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const exercises = [
    { name: "Push-ups", type: "repetition" },
    { name: "Jumping Jacks", type: "duration" },
    { name: "Sit-ups", type: "repetition" },
    { name: "Running in Place", type: "duration" }
  ];

  return (
    <div className="App">
      <h1>Exercise Tracker</h1>

      {!selectedExercise ? (
        <div>
          <h2>Select an Exercise</h2>
          {exercises.map((exercise, index) => (
            <button key={index} onClick={() => setSelectedExercise(exercise)}>
              {exercise.name}
            </button>
          ))}
          </div>
      ) : (
        <div>
           {selectedExercise.type === "repetition" ? (
            <RepetitionExercise name={selectedExercise.name} />
          ) : (
            <DurationExercise name={selectedExercise.name} />
          )}
          <button onClick={() => setSelectedExercise(null)}>Back to Menu</button>
          </div>
      )}
    
    </div>
  );
}

export default App;
