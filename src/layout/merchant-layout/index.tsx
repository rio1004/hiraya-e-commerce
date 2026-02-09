import { Outlet } from "react-router";
import Header from "./Header/Header";

const MainLayout = () => {
  return (
    <>
      <div className="pb-6">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
