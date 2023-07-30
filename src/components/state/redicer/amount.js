const reducer = (state = 0, action) => {
    if (action.type === "des") {
        return state + action.payload
    }
    else if (action.type === 'withdra') {
        return state - action.payload
    } else {
        return state;
    }
}
export default  reducer;