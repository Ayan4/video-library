import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";
import { RiUser2Fill } from "react-icons/ri";
import { CgSpinner } from "react-icons/cg";
import logo from "../../assets/logo.svg";
import { useTheme } from "../../context/themeContext";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Email is Required"),
  password: yup.string().required("Password Is Required")
});

function Login() {
  const { loginMutate, isLoginLoading, isLoginError, loginError } = useAuth();
  const { theme } = useTheme();

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

  const handleGuest = () => {
    const data = { email: "guestemail@gmail.com", password: "guestpassword" };
    loginMutate(data);
  };

  return (
    <div className={`min-h-screen ${theme && "bg-dark-bgr"} lg:pt-6`}>
      <div
        className={`px-5 max-w-screen-sm lg:rounded-lg mx-auto lg:p-8 lg:pt-0 ${
          theme
            ? "bg-dark-bgr lg:border lg:border-dark-bor"
            : "lg:border lg:border-white-2"
        }`}
      >
        <div className="flex flex-col items-center font-poppins w-full">
          <div className="flex flex-col items-center my-12">
            <div className="flex items-center mb-7 sm:flex-row" to="/">
              <img className="w-9 sm:w-10 mr-2 sm:mr-3" src={logo} alt="" />
              <p
                className={`${
                  theme ? "text-white-1" : "text-black-1"
                } text-3xl font-mont font-light sm:text-4xl`}
              >
                NEROVIEW
              </p>
            </div>
            <h2
              className={`text-lg ${theme ? "text-white-1" : "text-black-1"}`}
            >
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
                className={`border ${
                  theme
                    ? "text-white-1 border-white-1 bg-dark-bgr focus:border-gray-2"
                    : "text-black-1 border-gray-1"
                } rounded-md px-2 py-2.5 mb-2 w-full focus:outline-none focus:border-black placeholder-gray-1`}
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              <p className="font-normal text-sm text-red-500">
                {errors.email?.message}
              </p>
            </div>

            <div className="mb-3 w-full">
              <input
                className={`border ${
                  theme
                    ? "text-white-1 border-white-1 bg-dark-bgr focus:border-gray-2"
                    : "text-black-1 border-gray-1"
                } rounded-md px-2 py-2.5 mb-2 w-full focus:outline-none focus:border-black placeholder-gray-1`}
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              <p className="font-normal text-sm text-red-500">
                {errors.password?.message}
              </p>
            </div>

            {isLoginError && (
              <p className="mb-2 text-red-600 text-left w-full">
                {loginError.response.data.message}
              </p>
            )}

            <button className="bg-primary-red flex justify-center text-white py-3 mt-3 mb-2 w-full cursor-pointer transition-all hover:bg-opacity-90 rounded-md focus:opacity-90">
              {isLoginLoading ? (
                <CgSpinner className="text-2xl animate-spin" />
              ) : (
                <p>Login</p>
              )}
            </button>
          </form>
          <button
            onClick={handleGuest}
            className="bg-secondary-red flex items-center justify-center text-white py-3 my-2 w-full cursor-pointer transition-all hover:bg-opacity-90 rounded-md focus:opacity-90"
          >
            <RiUser2Fill className="text-xl mr-2" />
            Login As Guest
          </button>

          <p className={`mt-2 ${theme && "text-white-1"}`}>
            Don't have an account ?{" "}
            <Link
              className="text-primary-red font-medium underline"
              to="/signup"
            >
              Create Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
