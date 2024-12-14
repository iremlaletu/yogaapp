import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrainers, setFilteredCity } from "../redux/trainerSlice";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import Button from "../components/UI/Button";
import TrainerCalendar from "../components/UI/TrainerCalendar";

const TrainerPage = () => {
  const { trainers, loading, error, filteredCity } = useSelector(
    (state) => state.trainers
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (trainers.length === 0) {
      dispatch(fetchTrainers());
    }
    console.log("fetched");
  }, [dispatch, trainers]);

  if (loading) return <LoadingSpinner />;
  if (error)
    return (
      <div>
        <p>Couldn't get data</p> Error: {error}
      </div>
    );
  const cities = [...new Set(trainers.map((trainer) => trainer.city))];
  return (
    <div>
      <div
        data-aos="fade-right"
        data-aos-delay="300"
        className="flex flex-wrap justify-center gap-3 my-8"
      >
        {cities.map((city, idx) => (
          <Button
            key={idx}
            onClick={() => dispatch(setFilteredCity(city))}
            className="min-w-[120px] basis-[45%] md:basis-auto"
          >
            {city}
          </Button>
        ))}
      </div>
      <div>
        {filteredCity && (
          <h2 className="text-2xl font-semibold text-center">{filteredCity}</h2>
        )}
        <div>{filteredCity && <TrainerCalendar />}</div>
      </div>
    </div>
  );
};

export default TrainerPage;
