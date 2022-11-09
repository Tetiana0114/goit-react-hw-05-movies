import PropTypes from 'prop-types';
import css from './SearchBox.module.css';
import { FaSearch } from "react-icons/fa";

const SearchBox = ({ onSubmit }) => {
    return (
       <div className={css.search_bar}>
        <form onSubmit={onSubmit} className={css.form}>
        <input className={css.form_input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
        />
          <button type="submit" className={css.form_btn}><FaSearch size={26} className={css.btn_svg} /></button>
      </form>
      </div>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBox;