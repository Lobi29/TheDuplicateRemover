const reducer = (state='gogoiladitya@gmail.com', action) => {
    if (action.type === 'sendString') {
        return action.payload;
    } else {
        return state;
    }
}

export default reducer;