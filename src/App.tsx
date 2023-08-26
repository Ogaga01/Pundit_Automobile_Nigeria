import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Pictures from "./components/Pictures";
import Home from "./components/Home";

const App: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Pictures />} />
      </Routes>
    </div>
  );
};

export default App;
