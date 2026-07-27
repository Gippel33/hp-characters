import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllCharacters from "./pages/AllCharacters";
import OneCharacter from "./pages/OneCharacter";
import SharedLayout from "./pages/SharedLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="allcharacters" element={<AllCharacters />} />
          <Route path="onecharacter/:charID" element={<OneCharacter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
