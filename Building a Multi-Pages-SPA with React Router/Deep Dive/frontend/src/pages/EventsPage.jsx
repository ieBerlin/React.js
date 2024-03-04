import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventsPage;
export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    console.log("thrown");
    throw json(
      {
        message: "Couldn't fech the data ",
      },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
export async function loaderDefer() {
  return defer({
    events: loader(),
  });
}
