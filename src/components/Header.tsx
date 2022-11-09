import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

import { sessionStore, themeStore } from "../stores";
import { THEME, storeTheme } from "../lib/theme";
import AlphaTag from "./nav/AlphaTag";
import Avatar from "./settings/Avatar";
import BrandLogo from "./icons/BrandLogo";
import BrandWordmark from "./icons/BrandWordmark";
import DarkMode from "./icons/DarkMode";
import Hamburger from "./icons/Hamburger";
import LightMode from "./icons/LightMode";
import Shield from "./icons/Shield";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [theme, setTheme] = useRecoilState(themeStore);
  const session = useRecoilValue(sessionStore);

  const handleUpdateTheme = () => {
    const newTheme = Object.values(THEME).filter((val) => val !== theme)[0];
    setTheme(newTheme);
    storeTheme(newTheme)
  };

  return (
    <header className="navbar flex bg-base-100 pt-4">
      <div className="lg:hidden">
        {session.authed ? (
          <label
            htmlFor="sidebar-nav"
            className="drawer-button cursor-pointer -translate-x-2"
          >
            <Hamburger />
          </label>
        ) : (
          <div
            className="flex items-center cursor-pointer gap-3"
            onClick={() => navigate("/")}
          >
            <BrandLogo />
            <AlphaTag />
          </div>
        )}
      </div>

      {/* Even if the user is not authed, render this header in the connection flow */}
      {(!session.authed ||
        location.pathname.match(/register|backup|delegate/)) && (
        <div
          className="hidden lg:flex flex-1 items-center cursor-pointer gap-3"
          onClick={() => navigate("/")}
        >
          <BrandLogo />
          <div className="hidden lg:inline-block">
            <BrandWordmark />
          </div>
          <div className="hidden sm:inline-block">
            <AlphaTag />
          </div>
        </div>
      )}

      <div className="ml-auto">
        {!session.loading && !session.authed && (
          <div className="flex-none">
            <Link className="btn btn-primary btn-sm !h-10" to="/connect">
              Connect
            </Link>
          </div>
        )}

        {!session.loading && session.authed && !session.backupCreated && (
          <span
            onClick={() => navigate("/delegate-account")}
            className="btn btn-sm h-10 btn-warning rounded-full bg-orange-300 border-2 border-neutral font-semiBold text-neutral transition-colors ease-in hover:bg-orange-300"
          >
            <span className="mr-2">Backup recommended</span>
            <Shield />
          </span>
        )}

        {session.authed && (
          <Link to="/settings" className="ml-2 cursor-pointer">
            <Avatar size="small" />
          </Link>
        )}

        <span className="ml-2">
          <span onClick={handleUpdateTheme}>
            {theme === THEME.LIGHT ? <LightMode /> : <DarkMode />}
          </span>
        </span>
      </div>
    </header>
  );
};

export default Header;
