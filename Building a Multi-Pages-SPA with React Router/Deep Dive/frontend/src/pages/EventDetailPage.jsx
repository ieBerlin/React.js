import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem.js";
export default function EventDetailPage({ event }) {
  const data = useRouteLoaderData('eventId');
  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}
export async function loader({ request, params }) {
  const { eventId } = params;
  const response = await fetch("http://localhost:8080/events/" + eventId);
  if (!response.ok) {
    throw json(
      {
        message: "Couldn't fetch event detail page ",
      },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
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
