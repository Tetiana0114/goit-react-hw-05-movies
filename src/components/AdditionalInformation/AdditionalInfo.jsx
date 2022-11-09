import css from './AdditionalInfo.module.css';
import {  useLocation, Link } from 'react-router-dom';

const AdditionalInformation = () => {
    const location = useLocation();

    return (
        <>
        <h2 className={css.title}>Additional information:</h2>
        <ul>
                <li className={css.list_item}>
                    <Link to="cast" state={{ from: location.state?.from }}>Cast</Link>
                </li>
                <li className={css.list_item}>
                    <Link to="reviews" state={{ from: location.state?.from }}>Reviews</Link>
                </li>
        </ul>
        <hr />
        </>
    )
}

export default AdditionalInformation;