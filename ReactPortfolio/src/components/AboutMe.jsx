// AboutMe.jsx
import React from 'react';

function AboutMe() {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <div className="about-me-content">
        <div className="avatar">
          <img src="your-avatar.jpg" alt="Your Name" />
        </div>
        <div className="bio">
          <p>
            Hello! I'm [Your Name], a passionate web developer with a love for creating
            awesome web applications. I have [X] years of experience working with
            technologies like React, JavaScript, and HTML/CSS.
          </p>
          <p>
            I enjoy turning complex problems into simple, beautiful, and
            intuitive designs. When I'm not coding, you'll find me exploring
            new technologies or enjoying a great book.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
