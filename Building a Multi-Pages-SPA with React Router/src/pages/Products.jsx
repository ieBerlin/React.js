import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>
      <h1>Welcome to Products Page!</h1>
      <ul>
        <li>
          <Link to="/products/product1">Product 1</Link>
        </li>
        <li>
          <Link to="/products/product2">Product 2</Link>
        </li>
        <li>
          <Link to="/products/product3">Product 3</Link>
        </li>
      </ul>
    </>
  );
}
