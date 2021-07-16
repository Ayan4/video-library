import { useAuth } from "../../../context/authContext";

function LikedVideos() {
  const { user } = useAuth();
  return (
    <div className=" m-4 p-8 border border-black">
      <h1>{user.name}'s Liked videos</h1>
    </div>
  );
}

export default LikedVideos;
