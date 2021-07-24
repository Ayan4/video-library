import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Email is Required"),
  password: yup.string().required("Password Is Required")
});

function Login() {
  const {
    loginMutate,
    isLoginLoading,
    isLoginError,
    loginError,
    user
  } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const submitForm = data => {
    loginMutate(data);
  };

  if (user) return <h1>Hello {user.name}, This is your account</h1>;

  if (isLoginLoading) return <h1>Logging you in....</h1>;

  if (isLoginError)
    return <h1 className="text-red-500">{loginError.response.data.message}</h1>;

  return (
    <div className="px-5">
      <div className="flex flex-col items-center font-poppins w-full">
        <div className="text-center my-14">
          <h1 className="text-4xl mb-5">VidJam</h1>
          <h2 className="text-xl">
            <span className="text-primary-red">Login</span> to Your Account
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
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
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
              {...register("password", { required: true })}
            />
            <p className="font-normal text-sm text-red-500">
              {errors.password?.message}
            </p>
          </div>

          <input
            className="bg-primary-red text-white text py-3 my-2 w-full cursor-pointer rounded-md focus:opacity-90"
            type="submit"
            value="Login"
          />
        </form>

        <p className="mt-2">
          Don't have an account ?{" "}
          <Link className="text-primary-red font-medium underline" to="/signup">
            Create Here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
