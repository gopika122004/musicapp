import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayHome from "./components/DisplayHome";
import DisplayAlbum from "./components/DisplayAlbum";
import SearchPage from "./components/SearchPage"; // Import SearchPage

function App() {
  return (
    <Routes>
      <Route path="/" element={<DisplayHome />} />
      <Route path="/album/:id" element={<DisplayAlbum />} />
      <Route path="/search" element={<SearchPage />} /> {/* Added Search Page */}
    </Routes>
  );
}

export default App;
