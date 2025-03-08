import { Routes, Route } from "react-router-dom";
import DisplayHome from "./components/DisplayHome";
import DisplayAlbum from "./components/DisplayAlbum";
import SearchPage from "./components/SearchPage";
import Home from "./components/Home"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<DisplayHome />} />
      <Route path="/album/:id" element={<DisplayAlbum />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/*" element={<Home />} /> 
    </Routes>
  );
}

export default App;
