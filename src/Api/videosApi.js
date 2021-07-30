import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://video-library-backend-1.herokuapp.com"
});

// User authentication

export const userSignup = async userData => {
  const response = await apiClient.post("user/signup", userData);
  return response.data;
};

export const userLogin = async userData => {
  const response = await apiClient.post("user/login", userData);
  return response.data;
};

// Fetching videos and playlists

export const fetchAllVideos = async () => {
  const response = await apiClient.get("/videos");
  return response.data.videos;
};

export const fetchCategories = async () => {
  const response = await apiClient.get("/category");
  return response.data.category;
};

export const fetchVideo = async videoId => {
  const response = await apiClient.get(`/videos/${videoId}`);
  return response.data.video;
};

export const fetchLikedVideos = async () => {
  const response = await apiClient.get("likedvideos");
  return response.data;
};

export const fetchWatchLaterVideos = async () => {
  const response = await apiClient.get("watchlater");
  return response.data;
};

export const fetchHistoryVideos = async () => {
  const response = await apiClient.get("history");
  return response.data;
};

export const fetchPlaylists = async () => {
  const response = await apiClient.get("playlist");
  return response.data;
};

export const fetchSinglePlaylist = async playlistId => {
  const response = await apiClient.get(`playlist/${playlistId}`);
  return response.data;
};

// Outgoing requests

export const liked = async videoId => {
  const response = await apiClient.post(`likedvideos/${videoId}`);
  return response.data;
};

export const watchLater = async videoId => {
  const response = await apiClient.post(`watchlater/${videoId}`);
  return response.data;
};

export const history = async videoId => {
  const response = await apiClient.post(`history/${videoId}`);
  return response.data;
};

export const postComment = async commentData => {
  const videoId = commentData.videoId;
  const commentBody = { name: commentData.name, comment: commentData.comment };

  const response = await apiClient.post(
    `videos/comment/${videoId}`,
    commentBody
  );
  return response.data;
};

export const createPlaylist = async playlistName => {
  const response = await apiClient.post("playlist", playlistName);
  return response.data;
};

export const addToPlaylist = async data => {
  const playlistId = data.playlistId;
  const videoId = data.videoID;
  const response = await apiClient.post(`playlist/${playlistId}/${videoId}`);
  return response.data;
};

// Delete requests

export const deleteLikedVideo = async videoId => {
  const response = await apiClient.delete(`likedvideos/${videoId}`);
  return response.data;
};

export const deleteWatchLaterVideo = async videoId => {
  const response = await apiClient.delete(`watchlater/${videoId}`);
  return response.data;
};

export const deleteHistoryVideo = async videoId => {
  const response = await apiClient.delete(`history/${videoId}`);
  return response.data;
};

export const deletePlaylist = async playlistId => {
  const response = await apiClient.delete(`playlist/${playlistId}`);
  return response.data;
};

export const deletePlaylistVideo = async data => {
  const playlistId = data.playlistId;
  const videoId = data.videoId;
  const response = await apiClient.delete(`playlist/${playlistId}/${videoId}`);
  return response.data;
};

export const deleteComment = async commentData => {
  const videoId = commentData.videoId;
  const commentId = commentData.commentId;
  const isAdmin = { isAdmin: commentData.isAdmin };

  let response;
  if (isAdmin.isAdmin === true) {
    response = await apiClient.post(
      `videos/comment/${videoId}/${commentId}`,
      isAdmin
    );
  } else {
    response = await apiClient.post(`videos/comment/${videoId}/${commentId}`);
  }
  return response.data;
};
