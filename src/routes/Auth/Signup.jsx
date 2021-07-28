import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";
import logo from "../../assets/logo.svg";

const signupSchema = yup.object().shape({
  firstName: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required(),
  password: yup
    .string()
    .min(8)
    .required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null])
});

function Signup() {
  const {
    signupLoading,
    isSignupSuccess,
    isSignupError,
    signupError,
    signupMutate,
    signupData
  } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(signupSchema)
  });

  const submitForm = data => {
    signupMutate(data);
  };

  return (
    <div className="px-5 max-w-screen-sm lg:rounded-lg lg:border lg:border-white-2 m-auto lg:mt-6 lg:p-8 lg:pt-0">
      <div className="flex flex-col items-center font-poppins w-full">
        <div className="flex flex-col items-center my-8">
          <div className="flex items-center mb-5 sm:flex-row" to="/">
            <img className="w-9 sm:w-10 mr-2 sm:mr-3" src={logo} alt="" />
            <p className="text-black-1 text-3xl font-mont font-light sm:text-4xl">
              NEROVIEW
            </p>
          </div>
          <h2 className="text-lg">
            <span className="text-primary-red">Sign Up</span> with Neroview
          </h2>
        </div>

        <form
          className="flex items-center flex-col w-full"
          onSubmit={handleSubmit(submitForm)}
          action=""
        >
          <div className="mb-4 w-full">
            <input
              className="border text-black-1 border-gray-1 rounded-md px-2 py-2.5 mb-2 w-full focus:outline-none focus:border-black placeholder-gray-1"
              type="text"
              placeholder="Full Name"
              style={{ textTransform: "capitalize" }}
              {...register("firstName")}
            />
            <p className="font-normal text-sm text-red-500">
              {errors.firstName?.message}
            </p>
          </div>

          <div className="mb-4 w-full">
            <input
              className="border text-black-1 border-gray-1 rounded-md px-2 py-2.5 mb-2 w-full focus:outline-none focus:border-black placeholder-gray-1"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            <p className="font-normal text-sm text-red-500">
              {errors.email?.message}
            </p>
          </div>

          <div className="mb-4 w-full">
            <input
              className="border text-black-1 border-gray-1 rounded-md px-2 py-2.5 mb-2 w-full focus:outline-none focus:border-black placeholder-gray-1"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <p className="font-normal text-sm text-gray-1">
              {!errors.password && "Password must be 8 characters or long"}
            </p>
            <p className="font-normal text-sm text-red-500">
              {errors.password?.message}
            </p>
          </div>

          <div className="mb-3 w-full">
            <input
              className="border text-black-1 border-gray-1 rounded-md px-2 py-2.5 mb-2 w-full focus:outline-none focus:border-black placeholder-gray-1"
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            <p className="font-normal text-sm text-red-500">
              {errors.confirmPassword && "Passwords should match"}
            </p>
          </div>

          {isSignupSuccess && (
            <p className="mb-2 text-green-700 text-left w-full">
              {signupData.message}
            </p>
          )}
          {isSignupError && (
            <p className="mb-2 text-red-600 text-left w-full">
              {signupError.response.data.message}
            </p>
          )}

          <button className="bg-primary-red text-white flex justify-center py-3 mt-3 mb-2 w-full cursor-pointer rounded-md focus:opacity-90">
            {signupLoading ? (
              <CgSpinner className="text-2xl animate-spin" />
            ) : (
              <p>Create Account</p>
            )}
          </button>
        </form>

        <p className="mt-2">
          Already have an account ?{" "}
          <Link className="text-primary-red font-medium underline" to="/login">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
