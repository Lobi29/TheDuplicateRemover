import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card/Card';
import './styles.css';

const Edit = () => {

    const [outputText, setOutputText] = useState('');
    const [part1, setPart1] = useState('');
    const [part2, setPart2] = useState('hide');

    const char = useSelector(state => state.char);
    const str = useSelector(state => state.str);
    const index = useSelector(state => state.index);

    // making an array from the text
    let array = [];
    for (let i = 0; i < str.length; i++) {
        array.push(str[i]);
    }


    // making a 2D array
    // Create one dimensional array
    var lobi = new Array(2);


    // // Loop to create 2D array using 1D array
    for (var i = 0; i < str.length; i++) {
        lobi[i] = new Array(2);
    }


    // Loop to initialize 2D array elements.
    for (var k = 0; k < str.length; k++) {
        lobi[k][0] = str[k];
        lobi[k][1] = k;
    }


    const editStr = () => {
        let arr = "";


        for (let i = 0; i < str.length; i++) {
            if (i === index) {
                arr = arr + str[i];
            } 
            else if (str[i] !== char) {
                arr = arr + str[i];
            }
        }


        setOutputText(arr);

        setPart1('hide');
        setPart2('showEdit');
    }


    return (
        <>
            <section>
                <div className="editContainer">
                    <div className={part1}>
                        {
                            lobi.map((value) => (
                                <Card key={Math.random()} element={value} />
                            ))
                        }
                        <div className="deleteContainer">
                            <button className='deleteBtn' onClick={editStr}>delete duplicates of :: {char}</button>
                        </div>
                    </div>
                    <div className={part2}>
                        <div className="showContainer">
                            <h4>Congrats, you just removed all the duplicate appearence of <p style={{ display: 'inline', color: 'white', fontSize: '4rem' }}>{char}</p></h4>
                            <button>
                                <Link to="/" style={{ color: 'white' }}>Go Home</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <div className="container1">
                        <h3>Input String</h3>
                        <p>{str}</p>
                    </div>
                    <div className="container2">
                        <h3>Output String</h3>
                        <p>{outputText}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Edit;