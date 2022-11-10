import { NavLink, Outlet } from "react-router-dom";
import css from './SiteNavigation.module.css';
import { IoMdFilm } from "react-icons/io";

export const SiteNavigation = () => {
    return (
      <div>
        <header className={css.header}>
           <IoMdFilm size={60} className={css.logo} />
      <nav className={css.nav}>
          <NavLink
            to="/" end
            className={({ isActive }) => (isActive ? css.active : css.link)}
            >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? css.active : css.link)}
          >
            Movies
          </NavLink>
        </nav>
        </header>
        <hr className={css.hr} />
        <Outlet />
      </div>   
  );
};

export default SiteNavigation;