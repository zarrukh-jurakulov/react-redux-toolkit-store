import { useAppSelector } from "../../app/hooks";
import Loading from "../../components/loading";
import ProductCard from "../../components/product-card";
import { ProductCardType } from "../../types/product.type";

interface ProductType {
  data: ProductCardType;
}

const Home = () => {
  const { products, isLoading } = useAppSelector((state) => state.product);
  const { categories } = useAppSelector((state) => state.category);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container p-0 m-0">
      <div className="row my-3">
        <div className="d-flex flex-row">
          <button className="btn btn-light rounded-pill">All Products</button>
          {categories?.map((i: any, idx: number) => (
            <button className="btn btn-light rounded-pill mx-2" key={idx}>
              {i}
            </button>
          ))}
        </div>
      </div>
      <div className="row my-3">
        {products?.map((i: any) => (
          <div className="col-4 mh-100 my-3" key={i.key}>
            <ProductCard data={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
