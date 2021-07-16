import { useAuth } from "../../context/authContext";
import { Route, Navigate } from "react-router";

function PrivateRoute({ path, ...props }) {
  const { user } = useAuth();
  console.log(path);
  return (
    <div>
      {user ? (
        <Route path={path} {...props} />
      ) : (
        <Navigate state={{ from: path }} replace to="/login" />
      )}
    </div>
  );
}

export default PrivateRoute;
