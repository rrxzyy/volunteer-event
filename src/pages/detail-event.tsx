import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, CalendarHeart, Clock, MapPin } from "lucide-react";
import { eventService } from "../services/api/api";
import type { Event } from "../services/api/types";

const DetailEvent = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isJoin, setIsJoin] = useState<boolean>(false);

  useEffect(() => {
    const fetchEvent = async (): Promise<void> => {
      setLoading(true);
      try {
        const eventId = id ? parseInt(id) : null;
        if (eventId) {
          const fetchedEvent = await eventService.getEventById(eventId);
          setEvent(fetchedEvent || null);
        }
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const handleBack = () => {
    navigate("/");
  };

  const handleJoinClick = () => {
    setIsJoin(!isJoin);
  };

  if (loading) {
    return (
      <div className="bg-white text-neutral-950 min-h-screen flex items-center justify-center">
        <p>Loading event...</p>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="bg-white text-neutral-950 min-h-screen flex flex-col items-center justify-center">
        <p className="text-2xl">Event not found</p>
        <button
          onClick={handleBack}
          className="bg-neutral-950 text-white px-4 py-2 mt-8 rounded hover:bg-gray-800 cursor-pointer">
          Back
        </button>
      </div>
    );
  }
  return (
    <div className="bg-white text-neutral-950 min-h-screen pb-16">
      <div className="relative h-96 overflow-hidden text-white">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        <button
          onClick={handleBack}
          className="absolute top-6 left-6 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-colors cursor-pointer">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="absolute bottom-6 left-6 gap-4">
          <span className="bg-blue-500 rounded-full px-3 py-1 text-center text-sm">{event.category}</span>
          <h1 className="text-3xl font-bold my-4 drop-shadow-lg">{event.title}</h1>
          <h1 className="text-lg font-semibold">{event.organization}</h1>
        </div>
        <h1 className="text-4xl font-bold text-white">{event.title}</h1>
      </div>
      <div className="max-w-5xl mx-8 xl:mx-auto p-6 bg-white drop-shadow-lg border border-neutral-200 mt-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">About This Event</h2>
        <p className="mb-4">{event.description}</p>
      </div>
      <div className="flex md:flex-row flex-col gap-8 justify-between max-w-5xl mx-8 xl:mx-auto mt-8">
        <div className="w-full bg-white drop-shadow-lg border border-neutral-200 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Requirements</h2>
          <ul className="mb-4 list-disc list-inside">
            {event.requirements.map((req, index) => (
              <li key={index} className="font-medium text-md mb-3">
                {req}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full bg-white drop-shadow-lg border border-neutral-200 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Benefit</h2>
          <ul className="mb-4 list-disc list-inside">
            {event.benefits.map((benefit, index) => (
              <li key={index} className="font-medium text-md mb-3">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-5xl mx-8 xl:mx-auto p-6 bg-white drop-shadow-lg border border-neutral-200 mt-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Event Detail</h2>
        <div className="flex flex-col gap-2 mb-4">
          <p className="font-medium text-md flex items-center gap-3">
            <CalendarHeart className="w-5" /> <span>{event.date}</span>
          </p>
          <p className="font-medium text-md flex items-center gap-3">
            <Clock className="w-5" /> <span>{event.time}</span>
          </p>
          <p className="font-medium text-md flex items-center gap-3">
            <MapPin className="w-5" /> <span>{event.location}</span>
          </p>
        </div>
        <button
          onClick={() => handleJoinClick()}
          className={`w-full rounded py-2 text-white cursor-pointer ${isJoin ? "bg-red-500 hover:bg-red-700" : "bg-blue-500 hover:bg-blue-700"}`}>
          {isJoin ? "Cancel Event" : "Join Event"}
        </button>
      </div>
    </div>
  );
};
export default DetailEvent;
