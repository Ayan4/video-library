export const initialState = {
  videos: []
};

export const videoReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_VIDEOS":
      return {
        ...state,
        videos: action.payload
      };

    default:
      return state;
  }
};
