import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import "./HomePage.css";
import { ProductsGrid } from "./ProductsGrid";

const HomePage = ({ cart }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <Header cart={cart} />
      <link rel="icon" href="images/icons/home-favicon.png" />
      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
};

export default HomePage;
