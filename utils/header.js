function generateHeader() {
  const header = document.getElementById('same-header');

    // Determine current page URL path
  const currentPath = window.location.pathname;

  if (currentPath.includes('/pages/')) {
      // If current page is inside the 'pages' folder
      homeLink = '../index.html'; // Link to index.html in the root directory
      telegramLink = './telegram.html'; // Link to telegram.html in the current 'pages' folder
      secondaryLink = './secondary.html'; // Link to secondary.html in the current 'pages' folder
  } else {
      // If current page is index.html or any other page in the root directory
      homeLink = './index.html'; // Link to index.html in the current directory (root)
      telegramLink = './pages/telegram.html'; // Link to telegram.html inside the 'pages' folder
      secondaryLink = './pages/secondary.html'; // Link to secondary.html inside the 'pages' folder
  }

    header.innerHTML = `
    <div class="header-container">
        <div class="logo">RRR</div>
        <nav class="nav">
            <a href="${homeLink}">Home</a>
            <a href="${telegramLink}">Telegram</a>
            <a href="#contact">Contact</a>
            <a href="${secondaryLink}">Test</a>
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