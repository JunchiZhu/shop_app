import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navbar} from "./components/navbar";
import {Home} from "./pages/Home_component/home.jsx";
import {Cart} from "./pages/Cart_component/cart.jsx";
import {Shop_data} from "./components/shop_data";

function App() {
  return (
    <div className="App">
        <Shop_data>
            <Router>
                <Navbar/>
             <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/cart" element={<Cart/>}/>
             </Routes>
            </Router>
        </Shop_data>
    </div>
  );
}

export default App;
