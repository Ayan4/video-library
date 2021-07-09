import { Link } from "react-router-dom";
import ResponsivePlayer from "../../components/ResponsivePlayer/ResponsivePlayer";
import "./VideoListing.css";
import { FiLoader } from "react-icons/fi";
import { useVideo } from "../../context/videosContext";
import { useAuth } from "../../context/authContext";

const VideoListing = () => {
  const { state, isLoading, error } = useVideo();
  const { user } = useAuth();

  if (error) {
    return <h1>An error has occured and pointed out by react query</h1>;
  }

  return (
    <div className="video-listing">
      <h1>Video Listing Page</h1>

      {user && <h1>Hi, {user.name}</h1>}

      {isLoading && <FiLoader style={{ width: "5rem", height: "5rem" }} />}

      <div className="video-list">
        {state.videos?.map(item => {
          return (
            <Link
              key={item._id}
              className="video-card"
              to={`/videopage/${item._id}`}
            >
              <div className="video-thumbnail">
                <ResponsivePlayer
                  url={`https://www.youtube.com/watch?v=${item.videoId}`}
                  thumbnail
                />
              </div>
              <h3 className="video-title">{item.title}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default VideoListing;
