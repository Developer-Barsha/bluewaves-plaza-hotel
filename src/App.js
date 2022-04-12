import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
