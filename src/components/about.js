import React from "react";
import "./style.css";
import "./about.css";

function About() {
    return (
        <div className="about-container">
            <div className="about-hero">
                <h1>About <span>SHOPPING</span></h1>
                <p>Premium Quality. Exceptional Value. Seamless Experience.</p>
            </div>

            <div className="about-content">
                <div className="about-section">
                    <h2>Our Story</h2>
                    <p>
                        Founded in 2024, SHOPPING has grown from a small local boutique to a leading
                        online destination for quality furniture and home decor. Our mission is to
                        bring comfort and style into every home.
                    </p>
                </div>

                <div className="about-features">
                    <div className="feature-card">
                        <h3>Eco-Friendly</h3>
                        <p>We prioritize sustainable materials and ethical production methods.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Fast Delivery</h3>
                        <p>Our global logistics network ensures your products arrive on time.</p>
                    </div>
                    <div className="feature-card">
                        <h3>24/7 Support</h3>
                        <p>Our dedicated team is always here to help you with your purchase.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
