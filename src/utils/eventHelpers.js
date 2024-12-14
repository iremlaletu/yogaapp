import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const generateEventsFromTrainers = (filteredTrainers) => {
  return filteredTrainers.flatMap((trainer) =>
    trainer.availableSlot.map((slot) => {
      const startDateTime = dayjs(
        `${slot.date} ${slot.time}`,
        "YYYY-MM-DD h:mm A"
      )
        .tz("Asia/Istanbul")
        .toDate();
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
