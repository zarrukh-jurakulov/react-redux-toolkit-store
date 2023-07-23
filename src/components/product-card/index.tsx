import { ProductCardType } from "../../types/product.type";
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { MdOutlineStarRate, MdOutlineDiscount } from "react-icons/md";
import { useAppDispatch } from "../../app/hooks";
import CartService from "../../services/cart.service";
import {
  addNewCartError,
  addNewCartStart,
  addNewCartSuccess,
} from "../../slice/cart.slice";

interface PropsType {
  data: ProductCardType;
}

const ProductCard = ({ data }: PropsType) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // const addToCart = async(body:object) => {
  //   dispatch(addNewCartStart())
  //   const res = await CartService.addNewCart(body)
  //   dispatch(addNewCartSuccess())
  //   dispatch(addNewCartError())
  //   return res
  // }

  return (
    <div
      className="card d-flex flex-column justify-content-between p-3"
      style={{ height: 550 }}
    >
      <img
        src={data.image}
        className="card-img-top mx-auto"
        alt={data.title}
        style={{ width: 250, height: 250 }}
      />
      <div className="card-body">
        <h5 className="card-title">
          {data.title?.length > 50
            ? `${data.title.substr(0, 50)}...`
            : data.title}
        </h5>
        <p className="card-text">
          {data.description?.length > 100
            ? `${data.description.substr(0, 100)}...`
            : data.description}
        </p>
        <div className="col d-flex justify-content-between align-items-center">
          <p>$ {data?.price}</p>
          <p>
            <MdOutlineStarRate /> {data?.rating?.rate}
          </p>
          <p>
            <MdOutlineDiscount /> {data?.rating?.count}
          </p>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <button
          className="btn btn-lg"
          onClick={() => navigate(`/products/${data.id}`)}
        >
          <FiMoreVertical />
        </button>
        <button className="btn btn-lg">
          <AiOutlineShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
