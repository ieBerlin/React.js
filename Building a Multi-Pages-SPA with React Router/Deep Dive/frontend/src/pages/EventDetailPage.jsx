import { useParams } from "react-router-dom";

export default function EventDetailPage({ event }) {
  const {eventId} = useParams();
  return (
    <>
      <h1>EventDetailPage</h1>
      <h3>{eventId}</h3>
    </>
  );
}
