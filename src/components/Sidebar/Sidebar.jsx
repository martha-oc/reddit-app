import "./Sidebar.css";

function Sidebar() {
  const categories = ["Popular", "News", "Gaming", "Technology", "Sports"];

  return (
    <aside className="sidebar">
      <h2 className="sidebar__title">Categories</h2>

      <nav aria-label="Post categories">
        <ul className="sidebar__list">
          {categories.map((category, index) => (
            <li key={category}>
              <button
                type="button"
                className={`sidebar__item ${
                  index === 0 ? "sidebar__item--active" : ""
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
