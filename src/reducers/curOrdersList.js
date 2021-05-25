const ADD_CUR_ORDER = "ADD_CUR_ORDER";
const REMOVE_CUR_ORDER = "REMOVE_CUR_ORDER";
const UPDATE_CUR_ORDER = "UPDATE_CUR_ORDER";

export const addCurOrder = (curOrder, id) => ({
    type: ADD_CUR_ORDER,
    payload: {
        curOrder: curOrder,
        id: id,
    }
});


export const removeCurOrder = (id) => ({
    type: REMOVE_CUR_ORDER,
    payload: id,
});

export const updateCurOrder = (curOrder, id) => ({
    type: UPDATE_CUR_ORDER,
    payload: {
        curOrder: curOrder,
        id: id,
    }
});

const initialState = [];

const curOrdersList = (state = initialState, action) => {

    switch(action.type) {
        case ADD_CUR_ORDER: {
            return [
                ...state,
                {
                    ...action.payload.curOrder,
                    id: action.payload.id,
                }
            ];
        }
        case REMOVE_CUR_ORDER: {
            return state.filter((order) => order.id != action.payload)
        }
        case UPDATE_CUR_ORDER: {
            return state.map((order) => order.id != action.payload.id ? {...order} : {...action.payload.curOrder});
        }
        default:
            return state;   
    }

};

export default curOrdersList;
