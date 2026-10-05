import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <Sidebar />

        <section className="content">
          <h2>Popular Posts</h2>
          <p>Our Reddit posts will appear here.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
