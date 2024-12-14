import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "./Button";
import TrainerModal from "./TrainerModal";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = dayjsLocalizer(dayjs);

const TrainerCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const { trainers, filteredCity } = useSelector((state) => state.trainers);

  const filteredTrainers = trainers.filter(
    (trainer) => trainer.city === filteredCity
  );

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
  const testEvents = [
    {
      title: "Test Event",
      start: new Date(2024, 11, 15, 12, 0), // Aralık 15, 2024, 12:00
      end: new Date(2024, 11, 15, 12, 50), // Aralık 15, 2024, 12:50
    },
  ];

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  const handleTrainerSelecet = (trainer) => {
    setSelectedTrainer(trainer);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-8 p-2">
        <div className="flex flex-row mb-8 space-x-2">
          {filteredTrainers.map((ftrainer, idx) => (
            <Button key={idx} onClick={() => handleTrainerSelecet(ftrainer)}>
              {ftrainer.name}
            </Button>
          ))}
        </div>
        <Calendar
          localizer={localizer}
          events={testEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, width: "90%", overflow: "visible" }}
          onSelectEvent={handleEventSelect}
          defaultDate={new Date()}
          defaultView="month"
        />
      </div>
      <div>
        {/* Event Details Modal */}
        <TrainerModal
          title="Event Details"
          isVisible={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
        >
          {selectedEvent && (
            <>
              <p>Instructor: {selectedEvent.title}</p>
              <p>{dayjs(selectedEvent.start).format("MMMM D YYYY, h:mm A")}</p>
              <p>Place: {selectedEvent.description}</p>
            </>
          )}
        </TrainerModal>

        {/* Selected Trainer Modal */}
        <TrainerModal
          title="Trainer Details"
          isVisible={!!selectedTrainer}
          onClose={() => setSelectedTrainer(null)}
        >
          {selectedTrainer && (
            <>
              <img
                src={selectedTrainer.avatar}
                className="w-28 h-28"
                alt="avatar"
              />
              <p>{selectedTrainer.name}</p>
              <p>{selectedTrainer.city}</p>
              <p>{selectedTrainer.desc}</p>
            </>
          )}
        </TrainerModal>
      </div>
    </>
  );
};

export default TrainerCalendar;
