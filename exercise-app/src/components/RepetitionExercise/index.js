import React, { useState } from 'react';

//https://react.dev/learn/queueing-a-series-of-state-updates

function RepetitionExercise({ name }) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2> {name} </h2>
            <p>Knock them out: {count}</p>
            <button onClick={() => setCount(count +1)}>Increase</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};
export default RepetitionExercise;