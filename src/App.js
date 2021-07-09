import { Route, Routes } from "react-router-dom";
import VideoListing from "./routes/VideoListing/VideoListing";
import VideoPage from "./routes/VideoPage/VideoPage";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./routes/Signup/Signup";
import Login from "./routes/Login/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<VideoListing />} />
        <Route path="/videopage/:videoID" element={<VideoPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
