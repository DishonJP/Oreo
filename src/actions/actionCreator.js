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

export const setCurrentProduct = (id) => {
    return {
        type: actionTypes.CURRENT_PRODUCT,
        payload: id
    }
}

export const addProduct = (product) => {
    return {
        type: actionTypes.ADD_PRODUCT,
        payload: product
    }
}

export const removeProduct = (id) => {
    return {
        type: actionTypes.REMOVE_PRODUCT,
        payload: id
    }
}

export const search = (char) => {
    return {
        type: actionTypes.SEARCH,
        payload: char
    }
}


export const getProduct = () => {
    return async dispatch => {
       const data= await JSON.parse(localStorage.getItem('product'));
       dispatch(setProduct(data));
    }
}

export const setProduct = data => {
    return {
        type: actionTypes.GET_PRODUCT,
        payload: data
    }
}