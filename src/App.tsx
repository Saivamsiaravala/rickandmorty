import { Link, Outlet } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const App = () => {
  return (
    <div className="app">
      <header>
        <Link to="/" style={{ textDecorationLine: "none" }}>
          Rick and Morty
        </Link>
      </header>
      <Link to="search" className="search-btn">
        <CiSearch />
      </Link>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
