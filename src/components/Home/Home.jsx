import { useState } from "react";
import { Link } from 'react-router-dom';
import './styles.css';

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from '../../state/index';

const Home = () => {
  const [body, setBody] = useState('');
  const [formStyle, setFormStyle] = useState('formContainer');
  const [alertStyle, setAlertStyle] = useState('hide');
  const [proceedStyle, setProceeStyle] = useState('hide');

  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(body);

    // counting the number of blank space
    let count = 0;
    for (let i = 0; i < body.length; i++) {
      if (body[i] === ' ' || body[i] === '\n') {
        count = count + 1;
      }
    }

    // if everything is empty
    if (count === body.length) {
      setFormStyle('hide');
      setAlertStyle('show');
    } else {
      setProceeStyle('show');
      setFormStyle('hide');
    }

    actions.sendString(body);

    // clearing the input field
    setBody('');
  }

  // toggle
  const showError = () => {
    setAlertStyle('hide');
    setFormStyle('formContainer');
  }



  return (
    <div className="create">
      {/* form Container */}
      <div className={formStyle}>
        <h3>Add a New Text</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <p>text body:</p>
          </label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <button>Submit</button>
        </form>
      </div>

      {/* alert box */}
      <div className={alertStyle}>
        <div className="showContainer">
          <h4>Something is better than nothing, So, please enter something!</h4>
          <button onClick={() => showError()}>Okay, got it</button>
        </div>
      </div>
      {/* submit box */}
      <div className={proceedStyle}>
        <div className="showContainer">
          <h4>Do you want to, proceed your work to the editing page???</h4>
          <button>
            <Link to="/edit" style={{color: 'white'}}>proceed</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;