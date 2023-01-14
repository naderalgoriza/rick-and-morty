import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout: FC = () => {
  return (
    <div>
      <Header />
      <div className="py-20 px-30">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
