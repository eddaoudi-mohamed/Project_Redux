import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home";
import DetailProduct from "../pages/DetailProduct";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="porductDetail/:id" element={<DetailProduct />} />
    </>
  )
);
export default router;
