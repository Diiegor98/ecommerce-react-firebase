//Componente que muestra los detalles en base al ID
//El ID llega por params, ejecuta la función getProductById
//La data que llega se guarda en el estado product

import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "products", id);
    getDoc(docRef).then((res) => {
      setProduct({ ...res.data(), id: res.id });
    });
  }, [id]);

  return <div>{product && <ItemDetail product={product} />}</div>;
};

export default ItemDetailContainer;
