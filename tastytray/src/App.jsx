import React, { useContext } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Dish from './pages/Dish';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import About from './pages/About';
import Contacts from './pages/Contacts';
import PlaceOrder from './pages/PlaceOrder';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Admin
import AdminPanel from './Admin/AdminPanel';
import DishList from './Admin/DishList';
import OrderList from './Admin/OrderList';
import AddDish from './Admin/AddDish';
import AdminLogin from './Admin/AdminLogin';

import { ShopContext } from './context/Shopcontext';

const App = () => {
  const location = useLocation();
  const { isAdmin } = useContext(ShopContext);

  const isAdminRoute =
    location.pathname.startsWith('/admin') || location.pathname === '/admin-login';

  return (
    <>
      <ToastContainer />
      {!isAdminRoute && <Navbar />}

      <div className={`${!isAdminRoute ? 'px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]' : ''}`}>
        <Routes>
          {/* ---------- User Routes ---------- */}
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/dish/:dishId" element={<Dish />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* ---------- Admin Login ---------- */}
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* ---------- Admin Routes (Protected) ---------- */}
          <Route
            path="/admin"
            element={isAdmin ? <AdminPanel /> : <Navigate to="/admin-login" />}
          >
            <Route index element={<Navigate to="dishes" />} />
            <Route path="dishes" element={<DishList />} />
            <Route path="orders" element={<OrderList />} />
            <Route path="add-dish" element={<AddDish />} />
          </Route>

          {/* ---------- Fallback ---------- */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
