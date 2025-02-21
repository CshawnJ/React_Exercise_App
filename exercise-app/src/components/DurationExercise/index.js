import React, { useState, useEffect } from 'react'; 
//https://medium.com/how-to-react/simple-way-to-create-a-stopwatch-in-react-js-bcc0e08e041e

function DurationExercise({ name }) {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) { //increase time for every second or 1000 milliseconds
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        return ()=> {
           if (interval) clearInterval(interval);
    };
}, [isRunning]);
    //sticking to minutes and seconds for now
     const formatTime = (time) => {
        const minutes = Math.floor(time / 60).toString().padStart(2,'0');
        const seconds = (time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
     };

     return (
        <div>
            <h2>{name}</h2>
            <p>Let's see something: {formatTime(time)}</p>
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? 'Stop' : 'Start'}
            </button>
            <button onClick ={ () => setTime(0)}>Reset</button>
        </div>
     );
}

export default DurationExercise;