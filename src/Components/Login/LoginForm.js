import React, { useState } from 'react';
import './LoginForm.css';
import { FaUserGraduate, FaLock } from "react-icons/fa";
import Navbar from '../../navbar';
import { Link } from 'react-router-dom';

export default function LoginForm() {
    const style = {
        background: "black",
    }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateUsername = () => {
        if (username.length < 6) {
            setUsernameError('Username must be at least 6 characters long');
        } else {
            setUsernameError('');
        }
    };

    const validatePassword = () => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-__+.]).{8,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError('Password must be at least 8 characters, include one lowercase, one uppercase, one number, and one special symbol');
        } else {
            setPasswordError('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform full validation
        validateUsername();
        validatePassword();

        // ... Your login submission logic if there are no errors
    }

    return (
        <div className='navbar'>
            <Navbar />
            <div className='main'>
                <form onSubmit={handleSubmit}>
                    <h1>Welcome back!</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onBlur={validateUsername} // Validate on blur
                            required
                        />
                        <FaUserGraduate className='icon' />
                        {usernameError && <div className="error-message">{usernameError}</div>}
                    </div>

                    <div className="input-box">
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={validatePassword} // Validate on blur
                            required
                        />
                        <FaLock className='icon' />
                        {passwordError && <div className="error-message">{passwordError}</div>}
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>

                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <a href="#">Register</a></p>

                    </div>
                </form>
            </div>
        </div>
    );
}
