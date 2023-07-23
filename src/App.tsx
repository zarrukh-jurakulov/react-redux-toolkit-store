import { useEffect } from "react";
import "./App.css";
import { useAppDispatch } from "./app/hooks";
import Navbar from "./components/navbar";
import AppRoutes from "./routes";
import ProductService from "./services/product.service";
import {
  getProductDetailStart,
  getProductsSuccess,
} from "./slice/pruduct.slice";
import CategoryService from "./services/category.service";
import { getCategoriesSuccess } from "./slice/category.slice";

function App() {
  const dispatch = useAppDispatch();

  const fetchCategories = async (): void => {
    try {
      const res = await CategoryService.getAllCategories();
      dispatch(getCategoriesSuccess(res));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProducts = async (): void => {
    try {
      dispatch(getProductDetailStart());
      const res = await ProductService.getAllProducts();
      dispatch(getProductsSuccess(res));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
