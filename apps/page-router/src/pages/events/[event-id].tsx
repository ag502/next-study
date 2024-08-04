import { useRouter } from "next/router";

import EventContent from "@/components/events/event-detail/event-content";
import EventLogistics from "@/components/events/event-detail/event-logistic";
import EventSummary from "@/components/events/event-detail/event-summary";
import { getEventById } from "@/dummy-data";

export default function EventDetailPage() {
  const { query } = useRouter();

  const eventId = query["event-id"];

  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics address={event.location} date={event.date} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
