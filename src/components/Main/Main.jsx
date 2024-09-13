import Carousel from "./Carousel/Carousel";
import ItemListContainer from "./ItemList/ItemListContainer";

const Main = () => {
  return (
    <main className="flex flex-col justify-center items-center">
      <Carousel />
      <ItemListContainer />
    </main>
  );
};

export default Main;
