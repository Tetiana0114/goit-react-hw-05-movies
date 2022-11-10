import css from './AdditionalInfo.module.css';
import {  useLocation, NavLink } from 'react-router-dom';

const AdditionalInformation = () => {
    const location = useLocation();

    return (
        <>
        <h2 className={css.title}>Additional information:</h2>
        <ul>
                <li className={css.list_item}>
                    <NavLink
                        to="cast" state={{ from: location.state?.from }}
                        className={({ isActive }) => (isActive ? css.active : css.link)}
                    >
                        Cast
                    </NavLink>
                </li>
                <li className={css.list_item}>
                    <NavLink
                        to="reviews" state={{ from: location.state?.from }}
                        className={({ isActive }) => (isActive ? css.active : css.link)}
                    >
                        Reviews
                    </NavLink>
                </li>
        </ul>
        <hr />
        </>
    )
}

export default AdditionalInformation;