import { useState } from 'react';
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
        
        
        if (condition) {
            setBtnStyle('btn button-clicked');
            setCondition(false);
            
            actions.sendCharacter(e.target.innerHTML);
            actions.sendIndex(element[1]);
        } else {
            setBtnStyle('btn');
            setCondition(true);
            
        }
    }

    // setTimeout(() => {
        
    // }, 1000);
    // console.log(element[1]);

    // useEffect(() => {}, [])
    
    
    return (
        <button className={btnStyle}>
            <span onClick={(e) => changeStyle(e)}>{ element[0] }</span>
        </button>
    )
}

export default Card;