const reducer = (state=0, action) => {
    if (action.type === 'sendIndex') {
        return action.payload;
    } else {
        return state;
    }
}

export default reducer;