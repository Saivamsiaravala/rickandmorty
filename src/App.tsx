import { Link, Outlet } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const App = () => {
  return (
    <div className="app">
      <header>
        <Link to="/" style={{ textDecorationLine: "none" }}>
          Rick and Morty
        </Link>
        <Link to="search">
          <CiSearch />
        </Link>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
