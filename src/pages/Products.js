import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products">A book</Link>
        </li>
        <li>
          <Link>A carpet</Link>
        </li>
        <li>
          <Link>An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};
export default Products;
