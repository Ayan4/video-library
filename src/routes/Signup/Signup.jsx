import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../context/authContext";

const signupSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string(),
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
    user
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

  if (user) return <h1>Hello {user.name}, This is your account</h1>;

  if (isSignupSuccess) return <h1>{signupData.message}</h1>;

  if (isSignupLoading) return <h1>Signing you up....</h1>;

  if (isSignupError)
    return (
      <h1 className="text-red-500">{signupError.response.data.message}</h1>
    );

  return (
    <div className="flex items-center flex-col">
      <h1 className="text-2xl py-4">Signup to video library</h1>
      <form
        className="border border-black w-1/4 flex items-center flex-col"
        onSubmit={handleSubmit(submitForm)}
        action=""
      >
        <input
          className="border border-black m-4 p-1"
          type="text"
          placeholder="First Name..."
          {...register("firstName")}
        />
        <p className="mx-4 text-red-500"> {errors.firstName?.message} </p>

        <input
          className="border border-black m-4 p-1"
          type="text"
          placeholder="Last Name..."
          {...register("lastName")}
        />
        <p className="mx-4 text-red-500"> {errors.lastName?.message} </p>

        <input
          className="border border-black m-4 p-1"
          type="email"
          placeholder="Email..."
          {...register("email")}
        />
        <p className="mx-4 text-red-500"> {errors.email?.message} </p>

        <input
          className="border border-black m-4 p-1"
          type="password"
          placeholder="Password..."
          {...register("password")}
        />
        <p className="mx-4 text-red-500"> {errors.password?.message} </p>

        <input
          className="border border-black m-4 p-1"
          type="password"
          placeholder="Confirm Password..."
          {...register("confirmPassword")}
        />
        <p className="mx-4 text-red-500">
          {errors.confirmPassword && "Passwords should match"}
        </p>

        <input
          className="bg-black text-white px-4 py-2 m-4"
          type="submit"
          value="Signup"
        />
      </form>
    </div>
  );
}

export default Signup;
