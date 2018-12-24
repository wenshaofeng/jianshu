const defaultState = {
    focused : false
}

export default (state = defaultState, action) =>{
    if(action.type === 'search-on-focus'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.focused = true
        return  newState
    }

    if(action.type === 'search-on-blur'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.focused = false
        return  newState
    }
    
    return state ;
}