import { FC } from "react";
import { Link } from "react-router-dom";

interface Iprops {
  product: any;
}

const Product: FC<Iprops> = ({ product }) => {
  return (
    <>
      <Link to={`porductDetail/${product?.id}`}>
        <div className=" flex flex-col p-4  gap-1 bg-white border rounded-md border-gray-500 w-96 ">
          <img
            src={product?.image}
            className=" w-[250px] h-[200px] object-contain p-4 mx-auto "
            alt=""
          />
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
      </Link>
    </>
  );
};

export default Product;
