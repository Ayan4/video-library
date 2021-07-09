import "./VideoPage.css";
import ResponsivePlayer from "../../components/ResponsivePlayer/ResponsivePlayer";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchVideo } from "../../Api/videosApi";

const VideoPage = () => {
  const { videoID } = useParams();

  const { data: video, isLoading, error } = useQuery(["video", videoID], () =>
    fetchVideo(videoID)
  );

  const handleLike = id => {
    console.log(id);
  };

  if (error) return <h1>Error occured in fetching video</h1>;

  return (
    <div>
      <h1>Video Page</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <ResponsivePlayer
          url={`https://www.youtube.com/watch?v=${video?.videoId}`}
        />
      )}

      <div
        className="controls"
        style={{
          padding: "4rem",
          border: "1px solid black",
          textAlign: "center"
        }}
      >
        <button onClick={() => handleLike(video._id)}>Like</button>
        <button>Watch Later</button>
      </div>
    </div>
  );
};

export default VideoPage;
