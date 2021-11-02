import { createContext, useContext, useReducer, useEffect } from "react";
import { initialState, videoReducer } from "../context/reducer/videoReducer";
import { useQuery } from "react-query";
import { fetchAllVideos, fetchCategories } from "../Api/videosApi";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(videoReducer, initialState);
  const { data, isLoading: allVideosLoading, error } = useQuery(
    "videos",
    fetchAllVideos
  );

  const {
    data: categoryData,
    isLoading: categoryLoading,
    error: categoryError
  } = useQuery("category", fetchCategories);

  useEffect(() => {
    videoDispatch({ type: "FETCH_VIDEOS", payload: data });
    videoDispatch({ type: "FETCH_CATEGORY", payload: categoryData });
  }, [data, categoryData]);

  return (
    <VideoContext.Provider
      value={{
        videoState,
        videoDispatch,
        allVideosLoading,
        categoryLoading,
        error,
        categoryError
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => useContext(VideoContext);
