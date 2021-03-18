import products from './products'

const initialState = [
    ...products
]

export default (state=initialState, action) => {
    switch (action.type) {
        case "ADD_CART":
            return state.map(item =>{
                item.id === action.id && item.qtd++
                return item;
            });
        case "REMOVE_CART":
            return state.map(item =>{
                item.id === action.id && item.qtd--
                return item;
            });
        case "CLEAR_CART":
            return state.map(item =>{
                item.qtd = 0;
                return item;
            });
        default:
            return state;}
}