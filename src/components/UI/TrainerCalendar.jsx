import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import { generateEventsFromTrainers } from "../../utils/eventHelpers";

const localizer = dayjsLocalizer(dayjs);

const TrainerCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const { trainers, filteredCity } = useSelector((state) => state.trainers);

  const filteredTrainers = trainers.filter(
    (trainer) => trainer.city === filteredCity
  );

  const events = generateEventsFromTrainers(filteredTrainers);

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  const handleTrainerSelecet = (trainer) => {
    setSelectedTrainer(trainer);
  };

  return (
    <div className="flex justify-center items-center mt-8 lg:mt-15">
      <div className="h-[500px] md:w-4/5 w-9/10">
        <div className="flex flex-row mb-8 space-x-2">
          {filteredTrainers.map((ftrainer, idx) => (
            <Button key={idx} onClick={() => handleTrainerSelecet(ftrainer)}>
              {" "}
              {ftrainer.name}{" "}
            </Button>
          ))}
        </div>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "500px" }}
          onSelectEvent={handleEventSelect}
        />
      </div>
      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-neutral-500 bg-opacity-50">
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
      {/* Selected Trainer Modal */}
      {selectedTrainer && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-neutral-500 bg-opacity-50">
          <div className="bg-slate-200 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Trainer Details</h2>
            <img
              src={selectedTrainer.avatar}
              className="w-28 h-28"
              alt="avatar"
            />
            <p>{selectedTrainer.name}</p>
            <p>{selectedTrainer.city}</p>
            <p>{selectedTrainer.desc}</p>

            <button
              onClick={() => setSelectedTrainer(null)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
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
