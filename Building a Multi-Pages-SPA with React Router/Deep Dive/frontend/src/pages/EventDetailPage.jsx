import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem.js";
import EventsList from "../components/EventsList.js";
import { Suspense } from "react";
export default function EventDetailPage() {
  const { event, events } = useRouteLoaderData("eventId");
  return (
    <>
      <Suspense fallback={<p>Loading events...</p>}>
        <Await resolve={events}>
          {(loadEvents) => <EventsList events={loadEvents} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p>Loading event...</p>}>
        <Await resolve={event}>
          {(loadEvent) => <EventItem event={loadEvent} />}
        </Await>
      </Suspense>
    </>
  );
}
async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

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
    return resData.event;
  }
}
export async function loadEvents() {
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
export async function loader({ request, params }) {
  const { eventId } = params;
  return defer({
    event:  await loadEvent(eventId),
    events: loadEvents(),
  });
}
export async function action({ params, request }) {
  const { eventId } = params;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });
  if (!response.ok) {
    throw json(
      {
        message: "Couldn't delete event",
      },
      {
        status: 500,
      }
    );
  }
  return redirect("/events");
}
