import Header from "../components/Header";
import "./PageNotFound.css";

const PageNotFound = ({ cart }) => {
  return (
    <div className="page-not-found ">
      <Header cart={cart} />
      <h1>404 - Page Not Found</h1>
    </div>
  );
};

export default PageNotFound;
