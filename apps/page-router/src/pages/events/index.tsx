import { useRouter } from "next/router";

import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getAllEvents } from "@/dummy-data";

export default function AllEventsPage() {
  const { push } = useRouter();
  const events = getAllEvents();

  function findEventHandler(year: any, month: any) {
    const fullPath = `/events/${year}/${month}`;

    push(fullPath);
  }

  return (
    <div>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </div>
  );
}
