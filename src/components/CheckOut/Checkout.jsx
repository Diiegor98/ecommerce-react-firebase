//Hooks React
import { useContext, useState } from "react";

//useContext
import CartContext from "../../context/CartContext";

//Hook Form
import { useForm } from "react-hook-form";

//Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const { cart, totalPrice, emptyCart } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const comprar = (data) => {
    const finalOrder = { client: data, products: cart, total: totalPrice() };

    const pedidosRef = collection(db, "orders");
    addDoc(pedidosRef, finalOrder).then((doc) => {
      setOrderId(doc.id);
      emptyCart();
    });
  };

  if (orderId) {
    return (
      <div className=" flex flex-col justify-center items-center h-60 gap-4">
        <p className="font-semibold text-green-700 text-xl">
          Compra realizada con éxito
        </p>
        <p>Tu número de pedido es:</p>
        <p className="font-bold">{orderId}</p>
      </div>
    );
  }

  return (
    <>
      <div className="m-2">
        <h1 className="font-semibold text-xl">Finalizar compra</h1>
        <form
          onSubmit={handleSubmit(comprar)}
          className="flex flex-col gap-4 my-8 justify-center"
        >
          <input
            className="p-2 border border-slate-300 rounded-lg"
            type="text"
            placeholder="Ingresa tu nombre"
            {...register("nombre", {
              required: true,
            })}
          />
          {errors.nombre?.type === "required" && (
            <span className="text-red-600 text-sm">El campo es requerido</span>
          )}
          <input
            className="p-2 border border-slate-300 rounded-lg"
            type="email"
            placeholder="Ingresa tu email"
            {...register("email", {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
          />
          {errors.email?.type === "pattern" && (
            <span className="text-red-600 text-sm">El email no es válido</span>
          )}
          <input
            className="p-2 border border-slate-400 rounded-lg"
            type="phone"
            placeholder="Ingresa tu telefono"
            {...register("phone", {
              required: true,
            })}
          />
          {errors.phone?.type === "required" && (
            <span className="text-red-600 text-sm">El campo es requerido</span>
          )}
          <button
            type="submit"
            className="bg-paletteBrown hover:bg-paletteLightBrown p-2 border rounded-lg text-white hover:text-paletteBrown font-semibold"
          >
            COMPRAR
          </button>
        </form>
      </div>
    </>
  );
};

export default Checkout;
