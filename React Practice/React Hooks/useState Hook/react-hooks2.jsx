import React, { useState } from 'react';
// need to import the useState from react everytime we want to use it

// regex to match numbers between 1 and 10 digits long
const validPhoneNumber = /^\d{1,10}$/;

export default function PhoneNumber() {
    // this declares current state and state setter 
    const [phone, setPhone] = useState('');

    // this handle change could also be written like this const handleChange = (event) => setEmail(event.target.value) or 
    // const handleChange = (event) => {
    //     const newEmail = event.target.value;
    //     setEmail(newEmail);
    //   }
    const handleChange = ({ target }) => {
        const newPhone = target.value;
        const isValid = validPhoneNumber.test(newPhone);
        if (isValid) {
            // update state
            setPhone(newPhone);
        }
        // just ignore the event, when new value is invalid
    };

    return (
        <div className='phone'>
            <label for='phone-input'>Phone: </label>
            <input value={phone} onChange={handleChange} id='phone-input' />
        </div>
    );
}

