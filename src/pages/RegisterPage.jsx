import { useFormik } from "formik";
import {
  loginFormSchemas,
  registerFormSchemas,
} from "../schemas/RegisterFormSchemas";
import { useState } from "react";
import Button from "../components/UI/Button";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [isRegistering, setIsRegistering] = useState(true);

  const toggleFormType = () => {
    setIsRegistering((prev) => !prev);
  };

  const submit = (action) => {
    setTimeout(() => {
      action.resetForm();
    }, 2000);
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: isRegistering
      ? {
          name: "",
          email: "",
          age: "",
          password: "",
          confirmPassword: "",
          term: "",
        }
      : {
          email: "",
          password: "",
        },
    validationSchema: isRegistering ? registerFormSchemas : loginFormSchemas,
    onSubmit: submit,
  });

  return (
    <div className="w-full h-screen flex items-start">
      <div
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="200"
        className="relative hidden md:w-1/2 md:h-full md:flex flex-col"
      >
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          <h1 className="h1 my-5 text-white">
            Find Balance, Strength, and Energy
            <span className="text-primary-200"> your yoga your style.</span>
          </h1>
          <p className="text-xl text-white ">
            Discover a yoga experience that fits your lifestyle and transforms
            your goals into reality.
          </p>
        </div>
        <img
          className="w-full h-full object-cover"
          src="/assets/img/background/registerbg.jpg"
          alt="img"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-neutral-500 bg-opacity-50"></div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="200"
        className="md:w-1/2 w-full h-full flex flex-col p-14"
      >
        <h1 className="h1 text-center mb-5 text-primary-200 "> Gym Center </h1>
        <h2 className="text-lg mb-4 text-center">
          {isRegistering ? "Register" : "Sign In"}
        </h2>
        <form onSubmit={handleSubmit}>
          {isRegistering ? (
            <div className="space-y-10">
              {/* Register Form */}
              <div>
                <input
                  type="text"
                  id="name"
                  autoComplete="username"
                  placeholder="Enter your name"
                  value={values.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-neutral-500 outline-none"
                />
                {errors.name && (
                  <p className="text-primary-100">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="number"
                  id="age"
                  autoComplete="off"
                  placeholder="Enter your age"
                  value={values.age}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-neutral-500 outline-none"
                />
                {errors.age && <p className="text-primary-100">{errors.age}</p>}
              </div>

              <div>
                <input
                  type="text"
                  id="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-neutral-500 outline-none"
                />
                {errors.email && (
                  <p className="text-primary-100"> {errors.email} </p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  placeholder="Create your password"
                  value={values.password}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-neutral-500 outline-none"
                />
                {errors.password && (
                  <p className="text-primary-100">{errors.password}</p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  placeholder="Confirm your password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-neutral-500 outline-none"
                />
                {errors.confirmPassword && (
                  <p className="text-primary-100">{errors.confirmPassword}</p>
                )}
              </div>

              <div>
                <input
                  type="checkbox"
                  id="term"
                  value={values.term}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>I agree to the terms & conditions</label>
                {errors.term && (
                  <p className="text-primary-100">{errors.term}</p>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Sign In Form */}
              <div>
                <input
                  type="text"
                  id="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-neutral-500 outline-none"
                />
                {errors.email && (
                  <p className="text-primary-100">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-neutral-500 outline-none"
                />
                {errors.password && (
                  <p className="text-primary-100">{errors.password}</p>
                )}
              </div>
            </div>
          )}

          <div className="place-self-center mt-10">
            <Button type="submit">
              {isRegistering ? "Register" : "Sign In"}
            </Button>
          </div>
        </form>
        <p className="mt-4 text-center">
          {isRegistering ? (
            <>
              Already have an account?
              <button
                onClick={toggleFormType}
                className="text-blue-500 hover:underline"
              >
                Sign In
              </button>
            </>
          ) : (
            <>
              Don't have an account?
              <button
                onClick={toggleFormType}
                className="text-blue-500 hover:underline"
              >
                Register
              </button>
            </>
          )}
        </p>
        <div className="mt-4 text-center">
          <Link to="/"> Return to Home </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
