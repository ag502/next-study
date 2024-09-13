import { useRouter } from "next/router";

import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getAllEvents } from "@/helpers/api-util";

export default function AllEventsPage(props: any) {
  const { push } = useRouter();

  function findEventHandler(year: any, month: any) {
    const fullPath = `/events/${year}/${month}`;

    push(fullPath);
  }

  return (
    <div>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}
