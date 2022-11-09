import { NavLink, Outlet } from "react-router-dom";
// import css from './SiteNavigation.module.css';
import { IoMdFilm } from "react-icons/io";

export const SiteNavigation = () => {
    return (
      <div>
        <IoMdFilm size={36} />
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <hr />
        </nav>
        <Outlet />
      </div>   
  );
};

export default SiteNavigation;