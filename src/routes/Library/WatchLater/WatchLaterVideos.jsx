import { useAuth } from "../../../context/authContext";

function WatchLaterVideos() {
  const { user } = useAuth();
  return (
    <div className=" m-4 p-8 border border-black">
      <h1>{user.name}'s watch later videos</h1>
    </div>
  );
}

export default WatchLaterVideos;
