import react from "react";

import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
