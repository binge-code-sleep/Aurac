import React from 'react';
import Navbar from '../../navbar';

export default function ForgotPassword() {
    return (
        <div className='navbar'>
            <Navbar />
            <div className='main'>
                <form action="">
                    <h1>Forgot Password</h1>
                    <div className="input-box">
                        <input type="email" placeholder='Email' required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
