import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { HomePage } from "./pages/home-page";
// import { OurStoryPage } from './pages/our-story-page';
import { LoveLettersPage } from "./pages/love-letters-page";
// import { MemoriesPage } from './pages/memories-page';
import { FloatingHearts } from "./components/floating-hearts";
import WaveformPlayer from "./components/WaveformPlayer";
import { PrivateGalleryPage } from "./pages/private-gallery-page";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
        <FloatingHearts />
        <WaveformPlayer audioLocation={"/song-2.mp3"} />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/our-story" element={<OurStoryPage />} /> */}
          <Route path="/private-gallery" element={<PrivateGalleryPage />} />
          <Route path="/love-letters" element={<LoveLettersPage />} />
          {/* <Route path="/memories" element={<MemoriesPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}
