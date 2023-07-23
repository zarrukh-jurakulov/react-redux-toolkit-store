import { ProductCardType } from "../types/product.type";
import axios from "./api.service";

interface CartType {
  data: ProductCardType;
}

const CartService = {
  async getAllCart() {
    const { data }: CartType = await axios.get("carts");
    return data;
  },

  async addNewCart(body: object) {
    const { data }: CartType = await axios.post("carts", {
      body,
    });
    return data;
  },
};

export default CartService;
