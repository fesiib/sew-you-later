const CUR_ORDER_NEW_ID = "CUR_ORDER_NEW_ID";

export const makeCurOrderAvId = () => ({
    type: CUR_ORDER_NEW_ID,
});

const initialState = {
    avId: 0,
};

const curOrdersId = (state = initialState, action) => {

    // console.log('now an action: ' + action.type);
    // console.log('before the action: ' + state);
    switch(action.type) {
        case CUR_ORDER_NEW_ID: {
            return {
                ...state,
                avId: state.avId + 1,
            }
        }
        default:
            return state;
    }

};

export default curOrdersId;
