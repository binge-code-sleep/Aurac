import React from 'react';
import Navbar from '../../navbar';
import './about.css';

const About = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='about'>
                <h1>About Aurac</h1>
                <p>Aurac is a website design app that provides a variety of templates for your website needs. Whether you're building a blog, an e-commerce site, or a portfolio, Aurac has a template for you.</p>
                <p>Our mission is to make website design accessible and easy for everyone. With our intuitive interface and wide selection of templates, you can have a professional-looking website up and running in no time.</p>
                <p>Start designing with Aurac today and bring your vision to life!</p>
            </div>
        </div>
    );
}

export default About;
