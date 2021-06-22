// simple timer on a blank page 

import React, { useState, useEffect } from 'react';

export default function Timer() {
    const [time, setTime] = useState(0);
    const [name, setName] = useState('');

    // this useEffect sets an interval for the countdown and adds to the increment by 1 every 1 second
    // just like the simple-useEffect2, we have to remove an extra side effect to prevent a bug and coutning way more than it needs to be
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const handleChange = ({ target }) => setName(target.value);

    return (
        <>
            <input value={name} onChange={handleChange} type='text' />
            <h1>Time: {time}</h1>
        </>
    );
}

