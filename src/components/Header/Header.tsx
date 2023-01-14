import { FC } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header: FC = () => {
  type THeaderLink = {
    id: number;
    route: string;
    label: string;
  };
  const headerLinks: THeaderLink[] = [
    { id: 1, label: "Home", route: "/" },
    { id: 2, label: "Characters", route: "/characters" },
    { id: 3, label: "Episodes", route: "/episodes" },
    { id: 4, label: "Locations", route: "/locations" },
  ];

  const location = useLocation();

  return (
    <div id="app-header">
      <div className="linksContainer bg-primary-3 pa-18 font-18">
        {headerLinks.map((link) => (
          <Link
            className={`mx-4 ${
              location.pathname === link.route ? "active-link" : "link"
            }`}
            key={link.id}
            to={link.route}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
