import { FC } from "react";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";

const App: FC = () => {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
    </div>
  );
};

export default App;
