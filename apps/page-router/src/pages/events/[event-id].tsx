import EventContent from "@/components/events/event-detail/event-content";
import EventLogistics from "@/components/events/event-detail/event-logistic";
import EventSummary from "@/components/events/event-detail/event-summary";
import { getEventById, getAllEvents, getFeaturedEvents } from "@/helpers/api-util";

export default function EventDetailPage(props: any) {
  const event = props.selectedEvent;

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

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event: any) => ({ params: { ["event-id"]: event.id } }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const eventId = context.params["event-id"];

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}
