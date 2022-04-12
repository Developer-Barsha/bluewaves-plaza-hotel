import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <div>

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/checkout' element={<RequireAuth><Checkout /></RequireAuth>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
