import { CalendarHeart, Clock, MapPin } from "lucide-react";
import type { Event } from "../services/api/types";

interface cardProps {
  event: Event;
  onClick: (event: Event) => void;
}

const Card = ({ event, onClick }: cardProps) => {
  return (
    <div className="w-full bg-white border border-neutral-400 drop-shadow-lg rounded-lg">
      <div className="w-full h-48 rounded-t-lg overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
      </div>
      <div className="header flex flex-col gap-2 my-4 px-4">
        <h1 className="font-bold text-xl">{event.title}</h1>
        <p className="font-medium text-sm line-clamp-2">{event.description}</p>
      </div>
      <div className="content px-4 my-4">
        <p className="font-medium text-sm flex items-center gap-2">
          <CalendarHeart className="w-4" /> <span>{event.date}</span>
        </p>
        <p className="font-medium text-sm flex items-center gap-2">
          <Clock className="w-4" /> <span>{event.time}</span>
        </p>
        <p className="font-medium text-sm flex items-center gap-2">
          <MapPin className="w-4" /> <span>{event.location}</span>
        </p>
      </div>
      <div className="footer p-4">
        <button
          onClick={() => onClick(event)}
          className="w-full bg-blue-500 hover:bg-blue-700 rounded py-2 text-white cursor-pointer">
          View Detail
        </button>
      </div>
    </div>
  );
};

export default Card;
