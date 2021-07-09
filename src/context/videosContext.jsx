import { createContext, useContext, useReducer, useEffect } from "react";
import { initialState, videoReducer } from "../context/reducer/videoReducer";
import { useQuery } from "react-query";
import { fetchAllVideos } from "../Api/videosApi";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [state, videoDispatch] = useReducer(videoReducer, initialState);
  const { data, isLoading, error } = useQuery("videos", fetchAllVideos);

  useEffect(() => {
    videoDispatch({ type: "FETCH_VIDEOS", payload: data });
  }, [data]);

  return (
    <VideoContext.Provider value={{ state, videoDispatch, isLoading, error }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => useContext(VideoContext);
