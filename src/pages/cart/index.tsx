import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CartService from "../../services/cart.service";
import { getAllCartStart, getAllCartSuccess } from "../../slice/cart.slice";

const Cart = () => {
  const dispatch = useAppDispatch();

  const { carts, isLoading } = useAppSelector((state) => state.cart);

  console.log("carts", carts);

  const fetchAllCart = async (): void => {
    dispatch(getAllCartStart);
    const res = await CartService.getAllCart();
    dispatch(getAllCartSuccess(res));
  };

  useEffect(() => {
    fetchAllCart();
  }, []);

  return <div>Cart</div>;
};

export default Cart;
