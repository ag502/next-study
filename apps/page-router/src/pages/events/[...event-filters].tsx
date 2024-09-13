import EventList from "@/components/events/event-list";
import { getFilteredEvents } from "@/helpers/api-util";

export default function EventsFilterPage(props: any) {
  if (props.hasError) {
    return <p>Invalid filter. Please adjust your value.</p>;
  }

  if (!props.filteredEvents || props.filteredEvents.length === 0) {
    return <p>No events found for the chosen filter!</p>;
  }

  return (
    <div>
      <EventList items={props.filteredEvents} />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { params } = context;

  const filterData = params["event-filters"];

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
    return {
      props: { hasError: true },
      // notFound: true,
      // redirect: {
      //   destination: "/error",
      // },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      filteredEvents,
      data: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}
