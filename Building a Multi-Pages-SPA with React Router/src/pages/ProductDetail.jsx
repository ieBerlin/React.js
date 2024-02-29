import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();
  return (
    <>
      <h1>Detail page :</h1>
      <p>{productId}</p>
      <Link to=".." relative="path">Back</Link>
    </>
  );
}
