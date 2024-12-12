import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrainers } from "../redux/trainerSlice";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const TrainerPage = () => {
  const { trainers, loading, error } = useSelector((state) => state.trainers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrainers());
  }, [dispatch]);

  if (loading) return <LoadingSpinner />;
  if (error)
    return (
      <div>
        <p>Couldn't get data</p> Error: {error}
      </div>
    );

  return (
    <div>
      {trainers.length > 0 ? (
        trainers.map((trainer) => (
          <div key={trainer.id}>
            <h3>{trainer.name}</h3>
          </div>
        ))
      ) : (
        <p>No trainers available.</p>
      )}
    </div>
  );
};

export default TrainerPage;
