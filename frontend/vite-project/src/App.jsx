import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import DetailPage from "./pages/DetailPage"; 

const App = () => {
  const location = useLocation();
  const state = location.state;
  const background = state && state.background;

  return (
    <div data-theme="night">

      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/exercise/:id" element={<DetailPage />} />
       
      </Routes>

      {background && (
        <Routes>
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      )}

      {!background && (
        <Routes>
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
