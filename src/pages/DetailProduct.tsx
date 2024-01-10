import axios from "axios";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeSelectProduct, selectProduct } from "../App/producte/Action";

interface Iprops {}

const DetailProduct: FC<Iprops> = ({}) => {
  const { id } = useParams();
  const product = useSelector((state: { product: any }) => state.product);
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((responese) => {
        const data = responese.data;
        dispatch(selectProduct(data));
        console.log("datat", data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    fetchProduct();
    return () => {
      dispatch(removeSelectProduct());
    };
  }, [id]);
  console.log("product", product);
  return (
    <>
      <div className=" w-2/3 flex justify-center mx-auto mt-24">
        <div className=" flex flex-col p-4 md:flex-row  gap-1 bg-white border rounded-md border-gray-500 h-96 ">
          <div className=" md:flex-1">
            <img
              src={product?.image}
              className=" w-[250px] h-[200px] md:w-2/3 md:h-2/3 object-contain p-4 mx-auto "
              alt=""
            />
          </div>
          <div className=" flex flex-col p-4 md:flex-1 gap-1 h-fit">
            <h1 className=" text-black  w-full h-6 text-ellipsis overflow-hidden ... ">
              {product.title}
            </h1>
            <h2 className=" text-gray-500 text-base">{product.category} </h2>
            <p className=" text-sm text-black w-full h-10 text-ellipsis overflow-hidden ... ">
              {product?.description}
            </p>
            <p className=" text-blue-950 text-xl font-bold ">
              {" "}
              ${product?.price}{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
