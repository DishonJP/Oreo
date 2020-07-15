import * as actionTypes from '../actions/actionTypes'
import products from '../assets/product.json'

const initialState = {
    openDrawer: true,
    drawer: {
        content: "c",
        subContent: "l"
    },
    currentProduct: products[0],
    productList:[],
    search:""
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
        case actionTypes.CURRENT_PRODUCT:
            return {
                ...state,
                currentProduct: products.find(product => product.id === action.payload)
            }
        case actionTypes.ADD_PRODUCT:
            localStorage.setItem("product",JSON.stringify([...state.productList,action.payload]))
            return{
                ...state,
                productList:[...state.productList,action.payload]
            }
        case actionTypes.REMOVE_PRODUCT:
            const filterData=state.productList.filter(product=>product.id!==action.payload)
            localStorage.setItem("product",JSON.stringify(filterData))
            return{
                ...state,
                productList:filterData
            }
        case actionTypes.SEARCH:
            return{
                ...state,
                search:action.payload
            }
        case actionTypes.GET_PRODUCT:
            return{
                ...state,
                productList:action.payload
            }                
        default:
            return state;
    }
}

export default homeReducer