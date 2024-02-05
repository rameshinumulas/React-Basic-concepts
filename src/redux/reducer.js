const initialState = {
    count: 0
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case 'INCREAMENT': {
            return{
                ...state,
                count: action.payload
            }
        }
        default: {
            return state;
        }
    }
} 