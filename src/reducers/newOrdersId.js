const NEW_ORDER_NEW_ID = "NEW_ORDER_NEW_ID";

export const makeNewOrderAvId = () => ({
    type: NEW_ORDER_NEW_ID,
});

const initialState = {
    avId: 0,
};

const newOrdersId = (state = initialState, action) => {

    // console.log('now an action: ' + action.type);
    // console.log('before the action: ' + state);
    switch(action.type) {
        case NEW_ORDER_NEW_ID: {
            return {
                ...state,
                avId: state.avId + 1,
            }
        }
        default:
            return state;
        
    }

};

export default newOrdersId;
