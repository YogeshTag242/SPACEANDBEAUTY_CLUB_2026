import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    category: "Wellness Circle",
    title: "Morning Flow & Mindful Breath",
    description:
      "Start your weekend with gentle yoga and guided meditation for inner peace.",
    date: "Sun, Nov 17 · 9:00 AM",
    location: "Green Garden Park",
    image:
      "https://spaceandbeauty-club.s3.ap-south-1.amazonaws.com/event1.jpeg",
  },
  {
    id: 2,
    category: "Social Meetup",
    title: "Coffee & Conversations",
    description:
      "Meet like‑minded souls, share your stories, and enjoy artisan coffee.",
    date: "Wed, Nov 20 · 6:30 PM",
    location: "The Daily Bean Cafe",
    image:
      "https://spaceandbeauty-club.s3.ap-south-1.amazonaws.com/event2.jpeg",
  },
  {
    id: 3,
    category: "Outdoor Retreat",
    title: "Guided Forest Bathing Walk",
    description:
      "Slow down and immerse your senses in nature for a gentle, mindful walk.",
    date: "Sat, Nov 23 · 7:00 AM",
    location: "Redwood Trailhead",
    image:
      "https://spaceandbeauty-club.s3.ap-south-1.amazonaws.com/event3.jpeg",
  },
  {
    id: 4,
    category: "Creative Workshop",
    title: "Seasonal Floral Designing",
    description:
      "Learn the art of arranging seasonal flowers to create stunning centerpieces.",
    date: "Sun, Nov 24 · 1:00 PM",
    location: "The Botanical Studio",
    image:
      "https://spaceandbeauty-club.s3.ap-south-1.amazonaws.com/event4.jpeg",
  },
];

export default function UpcomingEvents() {
  return (
    <section id="up-events" className="bg-[#FFF7F4] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Upcoming <span className="gradient-text1">Events</span></h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Moments worth stepping out for. Discover what’s coming up next — thoughtfully
          curated gatherings you can join when it feels right.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}

function EventCard({ event }) {
  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col">
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="h-48 w-full object-cover"
        />
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs rounded-full">
          {event.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{event.description}</p>

        <div className="text-sm text-gray-500 space-y-1 mb-5">
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>{event.location}</span>
          </div>
        </div>

        <button className="mt-auto bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
          Join Event
        </button>
      </div>
    </div>
  );
}
