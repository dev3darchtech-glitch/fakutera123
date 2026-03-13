import { useEffect, useState } from "react";
import { FeatureHome, FilterHome, TableEdit, TableHome } from "./components";
import "./styles.css";
import { getProducts } from "../../apis/product.api";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="home">
      <div className="home__header">
        <FilterHome />
        <FeatureHome />
      </div>
      <TableHome
        products={products}
        loading={loading}
        setProduct={setProduct}
      />
    </section>
  );
};

export default HomePage;
