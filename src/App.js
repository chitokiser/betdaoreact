import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TopData from "./components/TopData";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import SVGSection from "./components/SVGSection";
import MyPage from "./components/MyPage";
import MT5 from "./components/MT5"; // MT5 컴포넌트 추가

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <TopData />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/p2e/mt5" element={<MT5 />} />
          {/* 다른 경로도 추가 */}
        </Routes>
        <LandingPage />
        <Footer />
        <SVGSection />
      </div>
    </Router>
  );
}

export default App;
