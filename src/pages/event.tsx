import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/card";
import { eventService } from "../services/api/api";
import type { Event } from "../services/api/types";

const EventPage = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setLoading(true);
      try {
        const events = await eventService.getAllEvents();
        setEvents(events);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEventClick = (event: Event) => {
    navigate(`/event/${event.id}`);
  };

  return (
    <div className="px-6 py-8 bg-neutral-100 w-full min-h-screen text-neutral-950">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <p>Loading events...</p>
        ) : (
          events.map((event) => <Card key={event.id} event={event} onClick={handleEventClick} />)
        )}
      </div>
    </div>
  );
};

export default EventPage;
