export const initialState = {
  videos: [],
  category: []
};

export const videoReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_VIDEOS":
      return {
        ...state,
        videos: action.payload
      };

    case "FETCH_CATEGORY":
      return {
        ...state,
        category: action.payload
      };

    default:
      return state;
  }
};
