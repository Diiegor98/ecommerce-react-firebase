import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const CartWidget = () => {
  const { cart, totalPrice, emptyCart } = useContext(CartContext);

  const handleEmpty = () => {
    emptyCart();
  };

  return (
    <div className="m-2">
      <h1 className="text-3xl font-bold">Mis compras</h1>
      <div className="flex flex-col gap-3 my-4">
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      {cart.length !== 0 ? (
        <div className="border border-slate-300 bg-slate-100 rounded-lg p-4">
          <h2 className="font-bold text-xl">Precio total: ${totalPrice()}</h2>{" "}
          <div className="flex gap-5 my-3">
            <button
              onClick={handleEmpty}
              className="border border-paletteBrown text-paletteBrown hover:text-white bg-white hover:bg-paletteBrown rounded-lg p-2"
            >
              Vaciar
            </button>
            <Link
              to="/checkout"
              className="border border-paletteBrown text-white hover:text-paletteBrown bg-paletteBrown hover:bg-white rounded-lg p-2"
            >
              Finalizar compra
            </Link>
          </div>
        </div>
      ) : (
        <h2 className="my-4">El carrito está vacío</h2>
      )}
    </div>
  );
};

export default CartWidget;
