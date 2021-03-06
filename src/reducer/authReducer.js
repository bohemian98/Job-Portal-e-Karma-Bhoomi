const initialState = {
    isAuthenticated: false,
    name: '',
    role: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'update_user': {
            return {
                ...state,
                ...action.payload
            }
        }
        default: 
            return state
    }
}