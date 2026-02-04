
import Market from "@/pages/market/Market";
import MainPage from "@/pages/TestPages";
import AboutPage from "@/pages/TestPages/about";
import Debounce from "@/pages/TestPages/Debounce";
import RaceCond from "@/pages/TestPages/RaceCondition";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Market />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/test">
        <Route path="debounce" element={<Debounce />} />
        <Route path="race" element={<RaceCond />} />
      </Route>
    </Routes>
  );
};

export default App;
