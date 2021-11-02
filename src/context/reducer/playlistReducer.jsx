export const initialState = {
  playlists: [],
  liked: [],
  watchLater: [],
  history: [],
  refetchPlaylists: null
};

export const playlistReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PLAYLISTS":
      return {
        ...state,
        playlists: action.payload
      };

    case "FETCH_LIKED_VIDEOS":
      return {
        ...state,
        liked: action.payload
      };

    case "FETCH_WATCH_LATER_VIDEOS":
      return {
        ...state,
        watchLater: action.payload
      };

    case "FETCH_HISTORY_VIDEOS":
      return {
        ...state,
        history: action.payload
      };

    case "ADD_TO_LIKED_VIDEOS":
      return {
        ...state,
        liked: action.payload
      };

    case "ADD_TO_WATCH_LATER_VIDEOS":
      return {
        ...state,
        watchLater: action.payload
      };

    case "CREATE_PLAYLIST":
      return {
        ...state,
        playlists: [...state.playlists, action.payload]
      };

    default:
      return state;
  }
};
