import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import axios from "axios";
import { setProducts } from "../App/producte/Action";

interface Iprops {}

const ProductList: FC<Iprops> = ({}) => {
  const porducts = useSelector(
    (state: { allProducts: { products: any[] } }) => state.allProducts.products
  );
  console.log("products", porducts);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const products = await axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const data = response.data;
        console.log("data", data);
        dispatch(setProducts(data));
      })
      .catch((error) => {
        console.log("errore", error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div className="conatiner my-7 mx-auto">
        <h1 className=" text-xl font-semibold text-white"> product Listing </h1>
        <div className=" flex flex-row justify-evenly gap-4 my-6  flex-wrap  ">
          {porducts?.map((item) => (
            <Product product={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
