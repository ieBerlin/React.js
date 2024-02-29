import { Link
  // , useNavigate 
} from "react-router-dom";
export default function Home() {
  // const navigate = useNavigate();

  // function navigateHandler() {
  //   navigate("/products");
  // }
  return (
    <>
      <h1>Welcome to Home Page!</h1>
      <p>
        <Link to="/products">Go to products page</Link>
      </p>
      {/* <p>
        <button onClick={navigateHandler}>Products Page</button>
      </p> */}
    </>
  );
}
