import { useRouter } from "next/router";

import EventList from "@/components/events/event-list";
import { getFilteredEvents } from "@/dummy-data";

export default function EventsFilterPage() {
  const { query } = useRouter();

  const filterData = query["event-filters"] as string[];

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const [year, month] = filterData;

  const numYear = +year!;
  const numMonth = +month!;

  if (
    Number.isNaN(numYear) ||
    Number.isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter. Please adjust your value.</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for the chosen filter!</p>;
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
}
