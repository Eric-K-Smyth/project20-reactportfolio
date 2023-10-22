import React from 'react';

function AboutMe() {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <div className="about-me-content">
        <div className="avatar">
          <img
            src="/ProfilePic.png"
            alt="A photo of Eric Smyth"
            className="avatar-image"
          />
        </div>
        <div className="bio">
          <p>
            Hello! I'm Eric, a passionate web developer with a love for creating
            awesome web applications. It all started when I made a little game in Javascript back in Highschool.
            Now my repertoire is capable of handling Full-Stack Apps using tech like React and Express!

          </p>
          <p>
            I enjoy turning complex problems into simple, beautiful, and
            intuitive designs. When I'm not coding, you can find me honing my graphic design skills
            making Youtube videos or relaxing playing some video games!
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
