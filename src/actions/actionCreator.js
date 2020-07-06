import * as actionTypes from './actionTypes'

export const handleDrawer = () => {
    return {
        type: actionTypes.OPEN_DRAWER
    }
}

export const activeContent = (index) => {
    return {
        type: actionTypes.ACTIVE_CONTENT,
        payload: index
    }
}

export const activeSubContent = (index) => {
    return {
        type: actionTypes.SUB_ACTIVE_CONTENT,
        payload: index
    }
}