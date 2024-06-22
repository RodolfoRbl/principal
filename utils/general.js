function generateHeader() {
  const header = document.getElementById('same-header');
  header.innerHTML = `
      <div class="header-container">
          <div class="logo">BBVA</div>
          <nav class="nav">
              <a href="index.html">Home</a>
              <a href="telegram.html">Telegram</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="secondary.html">Test</a>
          </nav>
      </div>
  `;

  const style = document.createElement('style');
  style.innerHTML = `
      body {
          margin: 0;
          font-family: Arial, sans-serif;
      }
      .header {
          background-color: #004481; /* BBVA dark blue */
          color: white;
          padding: 20px 0;
      }
      .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
      }
      .logo {
          font-size: 24px;
          font-weight: bold;
      }
      .nav {
          display: flex;
          gap: 20px;
      }
      .nav a {
          color: white;
          text-decoration: none;
          font-size: 18px;
          transition: color 0.3s;
      }
      .nav a:hover {
          color: #00b2e6; /* BBVA light blue */
      }
  `;
  document.head.appendChild(style);
}

generateHeader();