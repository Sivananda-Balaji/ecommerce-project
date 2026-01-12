import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import "./HomePage.css";
import { ProductsGrid } from "./ProductsGrid";

const HomePage = ({ cart, loadCartItems }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchproducts = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    fetchproducts();
  }, []);

  return (
    <>
      <Header cart={cart} />
      <link rel="icon" href="images/icons/home-favicon.png" />
      <div className="home-page">
        <ProductsGrid products={products} loadCartItems={loadCartItems} />
      </div>
    </>
  );
};

export default HomePage;
