const ADD = "ADD_CUR_ORDER";
const REMOVE = "REMOVE_CUR_ORDER";
const UPDATE = "UPDATE_CUR_ORDER";

export const addCurOrder = (curOrder) => ({
    type: ADD,
    payload: curOrder,
});


export const removeCurOrder = (id) => ({
    type: REMOVE,
    payload: id,
});

export const updateCurOrder = (id, curOrder) => ({
    type: UPDATE,
    payload: {
        id: id,
        curOrder: curOrder,
    }
});

const initialState = {
    orders: []
};

const _addCurOrder = (orderArr, curOrder) => {
    return [{...curOrder}, ...orderArr];
};

const _removeCurOrder = (orderArr, id) => {
    return orderArr.filter((val) => {
        return val.id != id;
    });
};

const _updateCurOrder = (orderArr, payload) => {
    for(let i = 0; i < orderArr.length; i++) {
        if(orderArr[i].id === payload.id) {
            orderArr[i] = {...payload.curOrder};
            break ;
        }
    }
    return orderArr;
};

const curOrdersList = (state = initialState, action) => {

    switch(action.type) {
        case ADD: {
            return {
                ...state,
                orders: _addCurOrder(state.orders, action.payload),
            }
        }
        case REMOVE: {
            return {
                ...state,
                orders: _removeCurOrder(state.orders, action.payload),
            }
        }
        case UPDATE: {
            return {
                ...state,
                orders: _updateCurOrder(state.orders, action.payload),
            }
        }
        default:
            return state;
        
    }

};

export default curOrdersList;
