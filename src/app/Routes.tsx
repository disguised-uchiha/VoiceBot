import { Routes, Route } from "react-router-dom";
import AudioTest from "./containers/AudioTest";
import Chatbot from "./containers/Chatbot";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Chatbot />} />
    </Routes>
  );
};

export default AppRoutes;
