import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>Reddit Explorer</p>

      <p>
        Built with React, Redux Toolkit and Vite. The current feed uses local
        mock data because Reddit API access was unavailable during development.
      </p>
    </footer>
  );
}

export default Footer;
