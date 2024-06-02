import Navbar from '../../navbar.js';
import "./webdesign.css";

function WebDesign() {

    return (
        <div className='mainbody'>
            <header>
                <Navbar />
            </header>
            <div className="opening">
                <video autoPlay loop muted style={{
                    width: "100%",
                    height: "auto",
                    opacity: "0.65",
                }}>
                    <source src="/videos/back.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="body">
                <div className="tles">
                    <h2 style={{ fontSize: "40px", fontWeight: "400" }}>Your Work</h2>
                    {/* Use a div with display: grid and grid-template-columns to create a responsive grid of templates */}
                    <div className="temp" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", WebkitTextFillColor: "antiquewhite" }}>
                        {/* Use a div with position: relative and overflow: hidden to create a template card */}
                        <div style={{ position: "relative", overflow: "hidden" }}>
                            {/* Use an img tag to display the template image */}
                            <img src='../images/template1.jpg' alt="Template 1" style={{ width: "100%", height: "100%" }} />
                            {/* Use a div with position: absolute and bottom: 0 to create a template overlay */}
                            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "black", color: "white", padding: "10px", opacity: "90%" }}>
                                {/* Use a h3 tag to display the template name */}
                                <h3 style={{ fontSize: "20px", fontWeight: "400" }}>Portfolio</h3>
                                {/* Use a p tag to display the template description */}
                                <p style={{ fontSize: "16px", fontWeight: "200" }}>A modern and minimalist template for personal or professional websites.</p>
                                {/* Use a button tag to display the template action */}
                                <button style={{ background: "#ff9900", border: "none", color: "white", padding: "10px", cursor: "pointer", marginTop: "10px" }}>Preview</button>
                            </div>
                        </div>
                        {/* Repeat the same structure for other templates */}
                        <div style={{ position: "relative", overflow: "hidden" }}>
                            <img src="images/template2.jpg" alt="Template 2" style={{ width: "100%", height: "auto" }} />
                            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "black", color: "white", padding: "10px", opacity: "90%" }}>
                                <h3 style={{ fontSize: "20px", fontWeight: "400" }}>Blogs</h3>
                                <p style={{ fontSize: "16px", fontWeight: "200" }}>A creative and colorful template for portfolio or blog websites.</p>
                                <button style={{ background: "#ff9900", border: "none", color: "white", padding: "10px", cursor: "pointer", marginTop: "10px" }}>Preview</button>
                            </div>
                        </div>
                        <div style={{ position: "relative", overflow: "hidden" }}>
                            <img src="images/template3.jpg" alt="Template 3" style={{ width: "100%", height: "auto" }} />
                            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "black", color: "white", padding: "10px", opacity: "90%" }}>
                                <h3 style={{ fontSize: "20px", fontWeight: "400" }}>ECOM/BUSINESS</h3>
                                <p style={{ fontSize: "16px", fontWeight: "200" }}>A sleek and elegant template for business or e-commerce websites.</p>
                                <button style={{ background: "#ff9900", border: "none", color: "white", padding: "10px", cursor: "pointer", marginTop: "10px" }}>Preview</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer'>
                <div className="contactus">
                    <h3>Contact Us</h3>
                    <nav>
                        <p>Email: support@aurac.com</p>
                        <p>Chat with us: <a href='#'>Click Here</a></p>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default WebDesign;