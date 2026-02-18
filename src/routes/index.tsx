import MainLayout from "@/layout/merchant-layout";
import Cart from "@/pages/cart";
import Market from "@/pages/market/Market";
// import AboutPage from "@/pages/TestPages/about";
// import Debounce from "@/pages/TestPages/Debounce";
// import RaceCond from "@/pages/TestPages/RaceCondition";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Market />} />
        <Route path="cart" element={<Cart />} />
      </Route>
      {/* <Route path="/about" element={<AboutPage />} />
      <Route path="/test">
        <Route path="debounce" element={<Debounce />} />
        <Route path="race" element={<RaceCond />} />
      </Route> */}
    </Routes>
  );
};

export default App;
