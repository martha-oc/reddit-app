import "./Sidebar.css";

function Sidebar({ selectedCategory, onCategoryChange }) {
  const categories = ["Popular", "News", "Gaming", "Technology", "Sports"];

  return (
    <aside className="sidebar">
      <h2 className="sidebar__title">Categories</h2>

      <nav aria-label="Post categories">
        <ul className="sidebar__list">
          {categories.map((category) => {
            const isActive = category === selectedCategory;

            return (
              <li key={category}>
                <button
                  type="button"
                  className={`sidebar__item ${
                    isActive ? "sidebar__item--active" : ""
                  }`}
                  onClick={() => onCategoryChange(category)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {category}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
