import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import About from "./pages/About";
import Shop from "./pages/shop/Shop";
import Blog from "./pages/Blog";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";
import CartPage from "./pages/Cart/CartPage";
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/shop"
          element={authUser ? <Shop /> : <Navigate to="/login" />}
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
      <Toaster />
      <Footer />
    </>
  );
};

export default App;
