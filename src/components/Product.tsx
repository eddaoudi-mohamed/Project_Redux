import { FC } from "react";

interface Iprops {}

const Product: FC<Iprops> = ({}) => {
  return (
    <>
      <div className=" flex flex-col gap-1 bg-white border rounded-md border-gray-500 max-w-96">
        <img src="" className=" w-full p-4 object-cover" alt="" />
        <h1>title</h1>
      </div>
    </>
  );
};

export default Product;
