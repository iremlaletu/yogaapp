import dayjs from "dayjs";

export const generateEventsFromTrainers = (filteredTrainers) => {
  return filteredTrainers.flatMap((trainer) =>
    trainer.availableSlot.map((slot) => {
      const startDateTime = dayjs(
        `${slot.date} ${slot.time}`,
        "YYYY-MM-DD h:mm"
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
};
