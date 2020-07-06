import * as actionTypes from '../actions/actionTypes'

const initialState = {
    openDrawer: true,
    drawer: {
        content: "c",
        subContent: "l"
    }
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_DRAWER:
            return {
                ...state,
                openDrawer: !state.openDrawer
            };
        case actionTypes.ACTIVE_CONTENT:
            return {
                ...state,
                drawer: {
                    ...state.drawer,
                    content: action.payload
                }
            }
        case actionTypes.SUB_ACTIVE_CONTENT:
            return {
                ...state,
                drawer: {
                    ...state.drawer,
                    subContent: action.payload
                }
            }
        default:
            return state;
    }
}

export default homeReducer