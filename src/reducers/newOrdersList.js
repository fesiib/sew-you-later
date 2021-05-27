const ADD_NEW_ORDER = "ADD_NEW_ORDER";
const REMOVE_NEW_ORDER = "REMOVE_NEW_ORDER";
const UPDATE_NEW_ORDER = "UPDATE_NEW_ORDER";

export const addNewOrder = (newOrder, id) => ({
    type: ADD_NEW_ORDER,
    payload: {
        newOrder: newOrder,
        id: id,
    }
});

export const removeNewOrder = (id) => ({
    type: REMOVE_NEW_ORDER,
    payload: id,
});

export const updateNewOrder = (newOrder, id) => ({
    type: UPDATE_NEW_ORDER,
    payload: {
        newOrder: newOrder,
        id: id,
    }
});

const initialState = [];

const newOrdersList = (state = initialState, action) => {

    // console.log('now an action: ' + action.type);
    // console.log('before the action: ' + state); 

    switch(action.type) {
        case ADD_NEW_ORDER: {
            return [
                ...state,
                {
                    ...action.payload.newOrder,
                    id: action.payload.id,
                }
            ];
        }
        case REMOVE_NEW_ORDER: {
            return state.filter((order) => order.id !== action.payload);
        }
        case UPDATE_NEW_ORDER: {
            return state.map((order) => order.id != action.payload.id ? {...order} : {...action.payload.newOrder});
        }
        default:
            return state;
        
    }

};

export default newOrdersList;
