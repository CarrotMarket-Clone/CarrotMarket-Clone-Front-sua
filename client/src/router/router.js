import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
// import your route components too

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={Home}>
      <Route path="/login" element={Login}>
      <Route path="/register" element={Register}>

        </Route>
        </Route> 
        </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);