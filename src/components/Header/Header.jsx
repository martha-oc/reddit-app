import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__logo">Reddit Explorer</h1>

        <form className="header__search">
          <input
            type="search"
            placeholder="Search Reddit..."
            aria-label="Search Reddit"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
