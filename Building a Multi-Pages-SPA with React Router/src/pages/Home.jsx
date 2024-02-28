import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <h1>Welcome to Home Page!</h1>
      <p>
        <Link to="/products">Go to products page</Link>
      </p>
    </>
  );
}
