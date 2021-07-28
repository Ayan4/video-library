import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import VideoPage from "./routes/VideoPage";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./routes/Auth/Signup";
import Login from "./routes/Auth/Login";
import Library from "./routes/Library/Library";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./routes/Home";
import NavbarBottom from "./components/Navbar/NavbarBottom";
import Playlist from "./routes/Library/Playlist";
import LikedVideos from "./routes/Library/LikedVideos";
import WatchLaterVideos from "./routes/Library/WatchLaterVideos";
import History from "./routes/Library/History";
import Profile from "./routes/Auth/Profile";

function App() {
  return (
    <div className="App 3xl:border-r 3xl:border-l">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videopage/:videoID" element={<VideoPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/library" element={<Library />} />
        <Route path="/likedvideos" element={<LikedVideos />} />
        <Route path="/watchlater" element={<WatchLaterVideos />} />
        <Route path="/history" element={<History />} />
        <PrivateRoute path="/playlist/:playlistId" element={<Playlist />} />
        <PrivateRoute path="/profile" element={<Profile />} />
      </Routes>
      <NavbarBottom />
    </div>
  );
}

export default App;
