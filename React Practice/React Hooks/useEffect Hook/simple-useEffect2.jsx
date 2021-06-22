// so in this simple application, the final product will add to the counter when the user clicks on the page/document
// if we want to use useEffect, we have to import it

import React, { useState, useEffect } from 'react';

export default function Counter() {
    const [clickCount, setClickCount] = useState(0);

    // this increment function is to handle the count and keep adding to the counter while maintaining the previous state
    const increment = () => setClickCount((prev) => prev + 1)

    useEffect(() => {
        document.addEventListener('mousedown', increment);
        // if i didnt add this return, it would keep applying the eventListener and stack up the functions creating not a +1.
        return () => {
            document.removeEventListener('mousedown', increment)
        }
    })


    return (
        <h1>Document Clicks: {clickCount}</h1>
    );
}

