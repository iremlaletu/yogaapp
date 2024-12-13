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
    <>
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="400"
        className="flex flex-wrap justify-center gap-4 my-8 p-2"
      >
        {cities.map((city, idx) => (
          <Button key={idx} onClick={() => dispatch(setFilteredCity(city))}>
            {city}
          </Button>
        ))}
      </div>
      <div>
        {filteredCity && (
          <h2 className="text-2xl font-semibold text-center">{filteredCity}</h2>
        )}
      </div>

      <div>{filteredCity && <TrainerCalendar />}</div>
    </>
  );
};

export default TrainerPage;
