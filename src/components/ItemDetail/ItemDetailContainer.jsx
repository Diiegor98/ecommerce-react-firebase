//Hook React
import { useEffect, useState } from "react";

//React Router DOM
import { useParams } from "react-router-dom";

//Firebase
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

//Componente Hijo
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  //Estado para guardar el producto encontrado con el id
  const [product, setProduct] = useState(null);

  //Id de la url
  const id = useParams().id;

  useEffect(() => {
    //Se busca en la DB de products un producto con el id igual al de params y lo guarda en el estado
    const docRef = doc(db, "products", id);
    getDoc(docRef).then((res) => {
      setProduct({ ...res.data(), id: res.id });
    });
  }, [id]);

  return (
    <div className="m-2 ">
      {product && <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
