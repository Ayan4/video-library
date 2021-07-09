import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../context/authContext";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email address")
    .required(),
  password: yup.string().required()
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
    <div className="flex items-center flex-col">
      <h1 className="text-2xl py-4">Login to your Account</h1>
      <form
        className="border border-black w-1/4 flex items-center flex-col"
        onSubmit={handleSubmit(submitForm)}
        action=""
      >
        <input
          className="border border-black m-4 p-1"
          type="email"
          placeholder="Email..."
          {...register("email", { required: true })}
        />
        <p className="mx-4 text-red-500"> {errors.email?.message} </p>

        <input
          className="border border-black m-4 p-1"
          type="password"
          placeholder="Password..."
          {...register("password", { required: true })}
        />
        <p className="mx-4 text-red-500"> {errors.password?.message} </p>

        <input
          className="bg-black text-white px-4 py-2 m-4"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
}

export default Login;
