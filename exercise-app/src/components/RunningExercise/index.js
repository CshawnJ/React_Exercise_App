import React, { useState, useEffect } from 'react';

function RunningExercise({ name }) {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1); 
            }, 1000);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isRunning]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    const countLap =()=> {
        setLaps([...laps, formatTime(time)]);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
        setLaps([]);
    };

    return (
        <div>
            <h2>{name}</h2>
            <p>Time: {formatTime(time)}</p>
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? 'Stop' : 'Start'}
            </button>
            <button onClick={countLap} disabled={!isRunning}>Record Lap</button>
            <button onClick={handleReset}>Reset</button>

            <h3>Laps</h3>
            <ul>
                {laps.map((lap, index) => (
                    <li key={index}>Lap {index + 1}: {lap}</li>
                ))}
            </ul>
        </div>
    );
}
export default RunningExercise;