import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  //data return by loader
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>;
  }
  const events = data.events;
  return <EventsList events={events}></EventsList>;
}

export default EventsPage;
export async function loader() {
  const response = await fetch("http://localhost:8080/eventsaddadaa");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch event" };
    throw { message: "Could not fetch events" };
  } else {
    return response;
  }
}
