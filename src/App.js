import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import Router from './router';
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
      <Link to="/about">About</Link>
      </header>
     <Router />
      </BrowserRouter>
     {/* <Mainrouter /> */}
    </div>
  );
}

export default App;
