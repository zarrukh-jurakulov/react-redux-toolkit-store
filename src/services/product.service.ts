import { ProductCardType } from "../types/product.type";
import axios from "./api.service";

interface ProductType {
  data: ProductCardType;
}

const ProductService = {
  async getAllProducts() {
    const { data }: ProductType = await axios.get("/products");
    return data;
  },

  async getProductDetail(slug: string) {
    const { data }: ProductType = await axios.get(`/products/${slug}`);
    return data;
  },
};

export default ProductService;
