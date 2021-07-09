import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://video-library-backend-1.herokuapp.com"
});

export const fetchAllVideos = async () => {
  const response = await apiClient.get("/videos");
  return response.data.videos;
};

export const fetchVideo = async videoId => {
  const response = await apiClient.get(`/videos/${videoId}`);
  return response.data.video;
};

export const likedVideo = async videoId => {
  const response = await apiClient.post(`playlist/liked/${videoId}`);
  return response.data.success;
};

export const userSignup = async userData => {
  const response = await apiClient.post("user/signup", userData);
  return response.data;
};

export const userLogin = async userData => {
  const response = await apiClient.post("user/login", userData);
  return response.data;
};
