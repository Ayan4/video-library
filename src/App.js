import { Route, Routes } from "react-router-dom";
import VideoPage from "./routes/VideoPage/VideoPage";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./routes/Signup/Signup";
import Login from "./routes/Login/Login";
import Library from "./routes/Library/Library";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./routes/Home/Home";
import NavbarBottom from "./components/Navbar/NavbarBottom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videopage/:videoID" element={<VideoPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/library" element={<Library />} />
        <PrivateRoute path="library" element={<Library />} />
      </Routes>
      <NavbarBottom />
    </div>
  );
}

export default App;
