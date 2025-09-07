import react from "react";

import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/Login";
import HomeComponent from "./components/home.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomeComponent />} />
    </Routes>
  );
}

export default App;
