import { useEffect, useState } from 'react';
import './styles.css';

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state/index';

const Card = ({ element }) => {
    const [btnStyle, setBtnStyle] = useState('btn');
    const [condition, setCondition] = useState(true);

    const dispatch = useDispatch();
    const actions = bindActionCreators(actionCreators, dispatch);


    const changeStyle = (e) => {
        // setTimeout(() => {
            
        // }, 1000);
        
        if (condition) {
            setBtnStyle('btn button-clicked');
            console.log(e.target.innerHTML);
            setCondition(false);
            actions.sendCharacter(e.target.innerHTML);
        } else {
            setBtnStyle('btn');
            setCondition(true);
        }
    }



    return (
        <button className={btnStyle}>
            <span onClick={(e) => changeStyle(e)}>{ element }</span>
        </button>
    )
}

export default Card;