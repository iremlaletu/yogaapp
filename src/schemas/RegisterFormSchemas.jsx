import * as yup from "yup";

export const registerFormSchemas = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  age: yup
    .number()
    .positive("Please enter a positive value.")
    .integer("The value must be an integer.")
    .min(18, "You must be at least 18")
    .required("Age is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Password is required")
    .oneOf([yup.ref("password")], "Passwords doesn't match"),
  term: yup.boolean().required("Please accept the terms and conditions"),
});

export const loginFormSchemas = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
