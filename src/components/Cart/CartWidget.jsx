import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart, totalPrice, emptyCart } = useContext(CartContext);

  const handleEmpty = () => {
    emptyCart();
  };

  return (
    <div>
      <h1>Carrito</h1>
      {cart.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} />
          <p>Precio total: {product.price * product.count}</p>
          <p>Cantidad: {product.count}</p>
        </div>
      ))}
      {cart.length !== 0 ? (
        <>
          <h2>Precio total: {totalPrice()}</h2>{" "}
          <button onClick={handleEmpty}>Vaciar</button>
          <Link to="/checkout">Finalizar compra</Link>
        </>
      ) : <h2>Carrito vacío</h2>}
    </div>
  );
};

export default CartWidget;
