import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import { generateEventsFromTrainers } from "../../utils/eventHelpers";
import TrainerModal from "./TrainerModal";

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
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="300"
        className="h-[500px] md:w-4/5 w-11/12"
      >
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
  );
};

export default TrainerCalendar;
