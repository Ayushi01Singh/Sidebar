import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import './App.css';

import { BrowserRouter ,Routes,Route} 
from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Admin from "./components/navbar/admin";
import Pos from "./components/navbar/pos";
import Sidebar from './components/Sidebar';
import Inventory from './pages/Inventory';
import Form from './components/Form';
import Analytics from './pages/Analytics';
import Customer from './pages/Customer';
import Booking from './pages/Booking';
import Dashboard from './pages/Dashboard';
 function App() {
    return (
       <BrowserRouter>
       <Navbar/>
        <Routes>
        <Route path="/admin" element={<Admin/>} />
        <Route path="/pos" element={<Pos/>} />
       
          </Routes>
          <Sidebar>
          <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/Inventory" element={<Inventory/>} />
          <Route path="/Analytics" element={<Analytics/>} />
          <Route path="/Booking" element={<Booking/>} />
          <Route path="/Customer" element={<Customer/>} />
          <Route path="/form" element={<Form/>} />

          </Routes>
          </Sidebar>
       </BrowserRouter> 
  );
}
export default App;
