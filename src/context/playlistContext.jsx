import { createContext, useContext, useReducer, useEffect } from "react";
import {
  initialState,
  playlistReducer
} from "../context/reducer/playlistReducer";
import { useQuery } from "react-query";
import {
  fetchPlaylists,
  fetchLikedVideos,
  fetchWatchLaterVideos,
  fetchHistoryVideos
} from "../Api/videosApi";
import { useAuth } from "./authContext";

const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  const [state, playlistDispatch] = useReducer(playlistReducer, initialState);
  const { user } = useAuth();

  const {
    data: playlistData,
    isLoading: playlistLoading
    // error: playlistError
  } = useQuery("playlists", () => {
    return user && fetchPlaylists();
  });

  const {
    data: likedVideosData,
    isLoading: likedVideosLoading
    // error: likedVideosError
  } = useQuery("liked", () => {
    return user && fetchLikedVideos();
  });

  const {
    data: watchLaterData,
    isLoading: watchLaterLoading
    // error: watchLaterError
  } = useQuery("watch later", () => {
    return user && fetchWatchLaterVideos();
  });

  const {
    data: historyData,
    isLoading: historyLoading
    // error: watchLaterError
  } = useQuery("history", () => {
    return user && fetchHistoryVideos();
  });

  useEffect(() => {
    playlistDispatch({
      type: "FETCH_PLAYLISTS",
      payload: playlistData?.playlists
    });

    playlistDispatch({
      type: "FETCH_LIKED_VIDEOS",
      payload: likedVideosData?.likedPlaylist.videos
    });

    playlistDispatch({
      type: "FETCH_WATCH_LATER_VIDEOS",
      payload: watchLaterData?.watchLaterPlaylist.videos
    });

    playlistDispatch({
      type: "FETCH_HISTORY_VIDEOS",
      payload: historyData?.history.videos
    });
  }, [playlistData, likedVideosData, watchLaterData, historyData]);

  return (
    <PlaylistContext.Provider
      value={{
        state,
        playlistDispatch,
        likedVideosLoading,
        watchLaterLoading,
        historyLoading,
        playlistLoading
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylist = () => useContext(PlaylistContext);
