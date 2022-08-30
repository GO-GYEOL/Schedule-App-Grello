import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      {/* 로그인페이지 */}
      <Route path="/" element={<LoginPage />} />

      {/* 홈 */}
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
