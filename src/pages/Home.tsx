import { FC } from "react";

interface Iprops {}

const Home: FC<Iprops> = ({}) => {
  return (
    <>
      <div className=" container p-4">
        <div className=" flex gap-1 ">
          <p>hello world in here </p>
        </div>
      </div>
    </>
  );
};

export default Home;
