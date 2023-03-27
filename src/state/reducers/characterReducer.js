const reducer = (state='@', action) => {
    if(action.type === 'sendCharacter') {
        return action.payload;
    } else {
        return state;
    }
}

export default reducer;