import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <header>Rick and Morty</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
