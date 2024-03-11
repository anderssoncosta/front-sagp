import { Outlet } from "react-router-dom";
import MenuMobile from "../nav-menu";
import SideBar from "../sidebar";
import { useMediaQuery } from "react-responsive";

const Layout = () => {
  const isScreen = useMediaQuery({ minWidth: 768 });

  return (
    <div className={isScreen ? "w-full flex" : "flex-col"}>
      {isScreen ? <SideBar /> : <MenuMobile />}

      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
