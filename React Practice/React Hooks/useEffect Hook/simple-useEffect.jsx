import React, { useState, useEffect } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    // useEffect is empty so if you tried to call it it would return nothing because it uses it to call back
    useEffect(() => {
        alert(count)
    })

    const handleClick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    );
}
