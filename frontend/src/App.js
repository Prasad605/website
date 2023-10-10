
import './App.css';
import React from 'react';
import WebFont from "webfontloader";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Header from './component/layout/Header/Header';
import Footer from './component/layout/Footer/Footer';
import Home from "./component/Home/Home.js";
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from './component/Product/Products';
import Search from "./component/Product/Search"
import LoginSignup from './component/User/LoginSignup';
import store from "./store";
import { loadUser } from './actions/userAction';
import UserOptions from "./component/layout/Header/UserOptions.js"
import { useSelector } from 'react-redux';
import Profile from './component/User/Profile';
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword";
import Cart from './component/Cart/Cart';
import Dashboard from "./component/Admin/Dashboard.js";

function App() {

const { isAuthenticated,user } = useSelector((state) => state.user)
  
 React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser())
  }, []);

  return (
    <Router>
      <Header/>
      {isAuthenticated && <UserOptions user = {user}/>}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/product/:id" element={<ProductDetails/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route path="/products/:keyword" element={<Products/>}/>
        <Route exact path="/search" element={<Search/>}/>
        <Route exact path="/login" element={<LoginSignup/>}/>

        <Route exact path='/account' element={<ProtectedRoute component={Profile} />} />

        <Route exact path='/me/update' element={<ProtectedRoute component={UpdateProfile} />} />

        <Route exact path='/password/update' element={<ProtectedRoute component={UpdatePassword} />} />

        <Route exact path='/password/forgot' element={<ForgotPassword/>} />
         <Route exact path="/Cart" element={<Cart/>}/>
         <Route exact path="/Admin/dashboard" element={<Dashboard/>}/>
      <Route exact path="/" element={<Dashboard/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
