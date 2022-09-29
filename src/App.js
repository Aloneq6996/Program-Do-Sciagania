import { Outlet, Link } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <nav className="navbar">
            <Link to="/biologia">Biologia</Link>
            <Link to="/historia" className="links">Historia</Link>
        </nav>
        <Outlet />
    </div>
  );
}

export default App;
