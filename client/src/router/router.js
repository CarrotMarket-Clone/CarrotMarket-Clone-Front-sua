import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../components/Home';
// import your route components too

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
      {/*<Route path="/login" element={<Login />}>
        </Route>  */}
        </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);