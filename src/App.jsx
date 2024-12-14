import { Route, Routes } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const RegisterPage = React.lazy(() => import("./pages/RegisterPage"));
const TrainerPage = React.lazy(() => import("./pages/TrainerPage"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
import Aos from "aos";
import "aos/dist/aos.css";
import LoadingSpinner from "./components/UI/LoadingSpinner";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 300,
    });
  }, []);
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/trainers" element={<TrainerPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
