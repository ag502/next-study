export async function getAllEvents() {
  const response = await fetch("https://next-study-e009d-default-rtdb.firebaseio.com/events.json");
  const data = await response.json();

  const events: any = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event: any) => event.isFeatured);
}

export async function getEventById(id: any) {
  const allEvents = await getAllEvents();
  return allEvents.find((event: any) => event.id === id);
}

export async function getFilteredEvents(dateFilter: any) {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event: any) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}
