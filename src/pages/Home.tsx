import { FC } from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

interface Iprops {}

const Home: FC<Iprops> = ({}) => {
  return (
    <>
      <div className=" container p-4 mx-auto">
        <Header />
        <ProductList />
      </div>
    </>
  );
};

export default Home;
