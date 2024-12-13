import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
const localizer = dayjsLocalizer(dayjs);

const TrainerCalendar = ({ trainers, city }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const filteredTrainers = trainers.filter((trainer) => trainer.city === city);
  const events = filteredTrainers.flatMap((trainer) =>
    trainer.availableSlot.map((slot) => {
      const startDateTime = dayjs(
        `${slot.date} ${slot.time}`,
        "YYYY-MM-DD h:mm A"
      ).toDate();
      const endDateTime = dayjs(startDateTime).add(50, "minute").toDate();
      return {
        title: `${trainer.name} - Yoga Class`,
        start: startDateTime,
        end: endDateTime,
        resource: trainer.name,
        description: `${slot.place}`,
      };
    })
  );
  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="flex justify-center items-center mt-8">
      <div style={{ height: "500px", width: "90%" }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "500px" }}
          onSelectEvent={handleEventSelect}
        />
      </div>
      {/* Event Details Section */}
      {selectedEvent && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50">
          <div className="bg-slate-200 p-6 rounded-lg shadow-lg max-w-xl w-full">
            <h2 className="text-xl font-semibold mb-4">Event Details</h2>
            <p>Instructor: {selectedEvent.title}</p>
            <p>{dayjs(selectedEvent.start).format("MMMM D YYYY, h:mm A")}</p>
            <p>Place: {selectedEvent.description}</p>
            <button
              onClick={() => setSelectedEvent(null)}
              className="mt-4 bg-red-500 text-white p-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainerCalendar;
