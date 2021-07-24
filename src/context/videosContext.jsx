import { createContext, useContext, useReducer, useEffect } from "react";
import { initialState, videoReducer } from "../context/reducer/videoReducer";
import { useQuery } from "react-query";
import { fetchAllVideos } from "../Api/videosApi";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(videoReducer, initialState);
  const { data, isLoading: allVideosLoading, error } = useQuery(
    "videos",
    fetchAllVideos
  );

  useEffect(() => {
    videoDispatch({ type: "FETCH_VIDEOS", payload: data });
  }, [data]);

  return (
    <VideoContext.Provider
      value={{ videoState, videoDispatch, allVideosLoading, error }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => useContext(VideoContext);
