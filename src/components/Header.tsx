import { FC } from "react";

interface Iprops {}

const Header: FC<Iprops> = ({}) => {
  return (
    <>
      <nav className="  border-b-2 pb-3 border-gray-500 shadow-md w-full mx-auto">
        <ul className="flex gap-3 ">
          <li>
            <h1 className=" text-lg font-bold text-blue-400">StoreShope</h1>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
