import { useRouteLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useRouteLoaderData("events");
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;
export async function loader() {
  console.log("laoded method has been called!");
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
  } else {
    const resData = await response.json();
    return resData.events;
  }
}