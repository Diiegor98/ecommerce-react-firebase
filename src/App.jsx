//React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Hook useContext
import { CartProvider } from "./context/CartContext.jsx";

//Componentes
import Navbar from "./components/Navbar/Navbar.jsx";
import Main from "./components/Main/Main.jsx";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer.jsx";
import Contact from "./components/Navbar/Contact/Contact.jsx";
import CartWidget from "./components/Cart/CartWidget.jsx";
import Checkout from "./components/CheckOut/Checkout.jsx";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/product" element={<Main />} />
          <Route path="/product/:category" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartWidget />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
