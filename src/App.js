import { Route, Routes } from "react-router-dom";
import CardDetailPage from "./pages/CardDetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RoomPage from "./pages/RoomPage";

function App() {
  return (
    <Routes>
      {/* 로그인페이지 */}
      <Route path="/" element={<LoginPage />} />

      {/* 룸 페이지 */}
      <Route path="/room" element={<RoomPage />} />

      {/* 홈 페이지*/}
      <Route path=":roomId/home" element={<HomePage />}>
        {/* 카드 디테일 페이지 */}
        <Route path=":cardId" element={<CardDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
