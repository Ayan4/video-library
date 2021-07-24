import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";

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
    isSignupLoading,
    isSignupSuccess,
    isSignupError,
    signupError,
    signupMutate,
    signupData,
    user,
    logout
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

  if (user)
    return (
      <>
        <h1>Hello {user.name}, This is your account</h1>
        {user && (
          <button
            className="px-4 py-2 bg-black text-white my-4"
            onClick={logout}
          >
            Logout
          </button>
        )}
      </>
    );

  if (isSignupSuccess) return <h1>{signupData.message}</h1>;

  if (isSignupLoading) return <h1>Signing you up....</h1>;

  if (isSignupError)
    return (
      <h1 className="text-red-500">{signupError.response.data.message}</h1>
    );

  return (
    <div className="px-5">
      <div className="flex flex-col items-center font-poppins w-full">
        <div className="text-center my-8">
          <h1 className="text-4xl mb-5">VidJam</h1>
          <h2 className="text-xl">
            <span className="text-primary-red">Sign Up</span> to VidJam
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

          <div className="mb-4 w-full">
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

          <input
            className="bg-primary-red text-white text py-3 my-2 w-full cursor-pointer rounded-md focus:opacity-90"
            type="submit"
            value="Create Account"
          />
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
