import { Route, Routes } from "react-router-dom";
import CardDetailPage from "./pages/CardDetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      {/* 로그인페이지 */}
      <Route path="/" element={<LoginPage />} />

      {/* 홈 페이지*/}
      <Route path="/home" element={<HomePage />} />

      {/* 카드 디테일 페이지 */}
      <Route path="/home/:cardId" element={<CardDetailPage />} />
    </Routes>
  );
}

export default App;
