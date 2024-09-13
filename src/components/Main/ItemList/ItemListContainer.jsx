//Hooks
import { useEffect, useState } from "react";

//React Router DOM
import { useParams } from "react-router-dom";

//Firebase
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase/config";

//Componente hijo
import ItemList from "./ItemList";



const ItemListContainer = () => {
  //Estado para guardar los productos que se obtienen de firebase
  const [products, setProducts] = useState([]);

  //se guarda en category el parametro dinámico de categoría. sports, tools, electronics
  const category = useParams().category;

  useEffect(() => {
    //Traer datos de la DB, segundo parámetro el nombre de la colección
    const productosRef = collection(db, "products");

    //Query y where permité hacer una consulta a una colección y aplicar filtros
    //En este caso igualamos la categoría de la colección con la que viene por params.
    const q = category
      ? query(productosRef, where("category", "==", category))
      : productosRef;

    //Obtiene los datos después de ser filtrados y los setea en el estado products.
    getDocs(q).then((res) => {
      setProducts(
        res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [category]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 place-items-center gap-3 my-10 max-w-[900px]">
      {products.map((product) => {
        return <ItemList key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ItemListContainer;
