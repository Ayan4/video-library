import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ScrollToTop from "./components/Utils/ScrollToTop";
import { VideoProvider } from "./context/videosContext";
import { AuthProvider } from "./context/authContext";
import { PlaylistProvider } from "./context/playlistContext";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthProvider>
          <PlaylistProvider>
            <VideoProvider>
              <ScrollToTop />
              <App />
            </VideoProvider>
          </PlaylistProvider>
        </AuthProvider>
      </Router>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
