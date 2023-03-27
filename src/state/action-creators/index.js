export const sendCharacter = (stringCharacter) => {
    return (dispatch) => {
        dispatch({
            type: 'sendCharacter',
            payload: stringCharacter
        })
    }
}

export const sendString = (textString) => {
    return (dispatch) => {
        dispatch({
            type: 'sendString',
            payload: textString
        })
    }
}


export const sendIndex = (indexValue) => {
    return (dispatch) => {
        dispatch({
            type: 'sendIndex',
            payload: indexValue
        })
    }
}