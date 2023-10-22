import React from 'react';

function Footer() {
  return (
    <footer>
      <ul className="social-links">
        <li>
          <a href="https://github.com/Eric-K-Smyth" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/githublogo.png" alt="GitHub Logo" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/eric-smyth-45493b297/" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/LinkedIn_icon.png" alt="LinkedIn Logo" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCKoZ5mWL5tDkK3PiJAKFpIw/" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/yticon.png" alt="Youtube Logo" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
