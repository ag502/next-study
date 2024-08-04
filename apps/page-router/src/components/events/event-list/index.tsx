import EventItem from "../event-item";

import classes from "./event-list.module.css";

export default function EventList(props: any) {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event: any) => (
        <EventItem
          date={event.date}
          id={event.id}
          image={event.image}
          key={event.id}
          location={event.location}
          title={event.title}
        />
      ))}
    </ul>
  );
}
