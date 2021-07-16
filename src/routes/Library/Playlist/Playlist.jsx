import { useAuth } from "../../../context/authContext";

function Playlist() {
  const { user } = useAuth();
  return (
    <div className=" m-4 p-8 border border-black">
      <h1>{user.name}'s Unamed playlist</h1>
    </div>
  );
}

export default Playlist;
