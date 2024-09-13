import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const { cart, totalPrice, emptyCart } = useContext(CartContext);
  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const finalOrder = { client: data, products: cart, total: totalPrice() };
    console.log(finalOrder);

    const pedidosRef = collection(db, "orders");
    addDoc(pedidosRef, finalOrder).then((doc) => {
      setOrderId(doc.id);
      emptyCart()
    });
  };

  if(orderId){
    return(
        <div>
            <p>Alta compra perro</p>
            <p>Tu número de pedido es {orderId}</p>
        </div>
    )
  }

  return (
    <>
      <div>
        <h1>Finalizar compra</h1>
        <form onSubmit={handleSubmit(comprar)}>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            {...register("nombre")}
          />
          <input
            type="email"
            placeholder="Ingresa tu email"
            {...register("email")}
          />
          <input
            type="phone"
            placeholder="Ingresa tu telefono"
            {...register("phone")}
          />
          <button type="submit">Comprar</button>
        </form>
      </div>
    </>
  );
};

export default Checkout;
