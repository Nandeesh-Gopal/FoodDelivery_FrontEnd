import './App.css';
import Home  from './pages/Home.js';
import Items  from './pages/Items.js';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Signup from './pages/Signup.js';
import Login from './pages/Login.js';
import Order from './pages/Order.js';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/items' element={<Items/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/order' element={<Order/>}/>

      </Routes>
    </Router>

  );
}

export default App;
