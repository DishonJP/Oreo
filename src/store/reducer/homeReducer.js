import * as actionTypes from '../actions/actionTypes'

const initialState={
    openDrawer:true
}

const homeReducer=(state=initialState,action)=>{
    switch (action.type)
    {
        case actionTypes.OPEN_DRAWER:
            return {
                ...state,
                openDrawer:!state.openDrawer
            };
        default:
            return state;   
    }
}

export default homeReducer