import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import './App.css'
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
  <Header />
  <Routes>
  <Route exact path='/' element={<Home />} />
  <Route path='/login' element={<Login />} />
  </Routes>
  <Footer />
  </div>
  );
}

export default App;
