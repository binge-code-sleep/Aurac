import React from 'react';
import Navbar from '../../navbar';
import './templates.css';

function Templates() {
    const style = {
        background: "black",
    }
    return (
        <div className='temp-container' style={style}>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='head'>
                <h1>Choose a Template you Love</h1>
                <div className='templates'>
                    <div className="template">
                        <img src="images/template1.jpg" alt="template 1" />
                        <p>A creative and colorful template for portfolio or blog websites.</p>
                    </div>
                    <div className="template">
                        <img src="images/template2.jpg" alt="template 2" />
                        <p>A minimalistic template suitable for showcasing photography works.</p>
                    </div>
                    <div className="template">
                        <img src="images/template3.jpg" alt="template 3" />
                        <p>An elegant and professional template designed for corporate websites.</p>
                    </div>
                    <div className="template">
                        <img src="images/template4.jpg" alt="template 4" />
                        <p>A modern and sleek template ideal for e-commerce platforms.</p>
                    </div>
                    <div className="template">
                        <img src="images/template5.jpg" alt="template 5" />
                        <p>A vibrant and dynamic template perfect for creative agency websites.</p>
                    </div>
                    <div className="template">
                        <img src="images/template6.jpg" alt="template 6" />
                        <p>A clean and professional template suitable for educational institutions.</p>
                    </div>
                    <div className="template">
                        <img src="images/template7.jpg" alt="template 7" />
                        <p>A stylish and trendy template designed for fashion blogs or magazines.</p>
                    </div>
                    <div className="template">
                        <img src="images/template8.jpg" alt="template 8" />
                        <p>A responsive and user-friendly template for travel booking websites.</p>
                    </div>
                    <div className="template">
                        <img src="images/template9.jpg" alt="template 9" />
                        <p>An artistic and unique template perfect for personal portfolio websites.</p>
                    </div>
                    <div className="template">
                        <img src="images/template10.jpg" alt="template 10" />
                        <p>A classic and timeless template ideal for online magazine platforms.</p>
                    </div>
                    <button style={{ fontFamily: "Fredoka", fontWeight: "600", width: "120px", fontSize: "16px", justifyContent: "center", padding: "10px", alignItems: "center", background: "linear-gradient(to right, pink, skyblue)", color: "black", border: "none", marginTop: "40px", marginLeft: "92%", borderRadius: "30px" }}>Load more</button>
                </div>
            </div>
        </div>
    );
}

export default Templates;
