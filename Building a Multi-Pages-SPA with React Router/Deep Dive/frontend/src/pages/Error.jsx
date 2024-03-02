import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent.js";
export default function Error() {
    const error = useRouteError();
    console.log(error)
  let title = "An error occured";
  let message = "Something went wrong!";
  if (error.status === 500) {
      message = error.data.message;
    }
    if (error.status === 404) {
        title="Not found."
        message  = "Couldn't find resource or page."
    }
  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
}
