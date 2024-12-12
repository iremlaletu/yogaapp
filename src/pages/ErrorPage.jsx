import Button from "../components/UI/Button";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center h-[50vh] space-y-4 ">
      <h1 className="text-3xl font-semibold ">Oops! Something went wrong</h1>
      <h4 className="text-lg ">
        The page you're looking for might have been moved or doesn't exist
        anymore.
      </h4>
      <Button to="/">to the Home Page</Button>
    </div>
  );
};

export default ErrorPage;
