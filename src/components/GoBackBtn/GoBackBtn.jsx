import { SlActionUndo } from "react-icons/sl";
import css from './GoBackBtn.module.css';

const GoBackBtn = () => {
    return (
    <button type="button" className={css.btn}><SlActionUndo size={32} className={css.btn_svg} /></button> 
    );
}

export default GoBackBtn;