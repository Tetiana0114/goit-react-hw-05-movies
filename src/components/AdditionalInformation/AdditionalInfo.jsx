import css from './AdditionalInfo.module.css';
import {  useLocation, NavLink } from 'react-router-dom';

const AdditionalInformation = () => {
    const location = useLocation();
    const backLink = location.state?.from;

    return (
        <>
        <h2 className={css.title}>Additional information:</h2>
        <ul>
                <li className={css.list_item}>
                    <NavLink
                        to="cast" state={{ from: backLink }}
                        className={({ isActive }) => (isActive ? css.active : css.link)}
                    >
                        Cast
                    </NavLink>
                </li>
                <li className={css.list_item}>
                    <NavLink
                        to="reviews" state={{ from: backLink }}
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