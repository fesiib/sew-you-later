const ADD = "ADD";
const REMOVE = "REMOVE";

export const addNewOrder = (newOrder) => ({
    type: ADD,
    payload: newOrder,
});


export const removeNewOrder = (id) => ({
    type: REMOVE,
    payload: id,
});

const initialState = {
    orders: []
};

const _addNewOrder = (orderArr, newOrder) => {
    return [...orderArr, {...newOrder}];
};

const _removeNewOrder = (orderArr, id) => {
    return orderArr.filter((val) => {
        return val.id != id;
    });
};

const newOrdersList = (state = initialState, action) => {

    switch(action.type) {
        case ADD: {
            return {
                ...state,
                orders: _addNewOrder(state.orders, action.payload),
            }
        }
        case REMOVE: {
            return {
                ...state,
                orders: _removeNewOrder(state.orders, action.payload),
            }
        }
        default:
            return state;
        
    }

};

export default newOrdersList;
