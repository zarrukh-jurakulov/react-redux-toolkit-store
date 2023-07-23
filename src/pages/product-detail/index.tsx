import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../../services/product.service";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getProductDetailStart,
  getProductDetailSuccess,
} from "../../slice/pruduct.slice";
import { ProductCardType } from "../../types/product.type";
import { MdOutlineStarRate, MdOutlineDiscount } from "react-icons/md";
import Loading from "../../components/loading";

interface ProductType {
  productDetail: ProductCardType;
}

const ProductDetail = () => {
  const { id }: string = useParams();
  const dispatch = useAppDispatch();

  const fetchSingleProduct = async (): void => {
    dispatch(getProductDetailStart());
    const res = await ProductService.getProductDetail(id);
    dispatch(getProductDetailSuccess(res));
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  const { productDetail, isLoading }: ProductType = useAppSelector(
    (state) => state.product
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container p-0 m-0">
      <div className="row mt-3">
        <div className="col d-flex align-items-center justify-content-center">
          <img
            src={productDetail?.image}
            alt={productDetail?.title}
            style={{ width: 500, height: 500 }}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 d-flex align-items-center justify-content-center flex-column">
          <h3 className="text-center">{productDetail?.title}</h3>
          <p className="text-left mt-3">{productDetail?.description}</p>
        </div>
        <div className="col d-flex justify-content-between align-items-center">
          <h3>$ {productDetail?.price}</h3>
          <h3>
            <MdOutlineStarRate /> {productDetail?.rating?.rate}
          </h3>
          <h3>
            <MdOutlineDiscount /> {productDetail?.rating?.count}
          </h3>
        </div>
        <div className="d-flex justify-content-end mt-3">
          <button className="btn btn-light border btn-lg">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
