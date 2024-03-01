import { Link } from "react-router-dom";

export default function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      {DUMMY_EVENTS.map((event) => (
        <h3>
          <Link to={event.id}>{event.title}</Link>
        </h3>
      ))}
    </>
  );
}

const DUMMY_EVENTS = [
  {
    id: "1",
    title: "Event 1 is so cool",
    description: "bla bla bla",
  },
  {
    id: "2",
    title: "Event 2 is so cool",
    description: "bla bla bla",
  },
  {
    id: "3",
    title: "Event 3 is so cool",
    description: "bla bla bla",
  },
];
