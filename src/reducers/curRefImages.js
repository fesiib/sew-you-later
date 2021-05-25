const ADD_CUR_REF_IMAGE = "ADD_CUR_REF_IMAGE";
const REMOVE_CUR_REF_IMAGE = "REMOVE_CUR_REF_IMAGE";

export const addCurRefImage = (src, parentId) => ({
    type: ADD_CUR_REF_IMAGE,
    payload: {
        src: src,
        parentId: parentId,
    }
});


export const removeCurRefImage = (parentId) => ({
    type: REMOVE_CUR_REF_IMAGE,
    payload: parentId,
});

const initialState = [];

const curRefImages = (state = initialState, action) => {

    // console.log('now an action: ' + action.type);
    // console.log('before the action: ' + state);
    switch(action.type) {
        case ADD_CUR_REF_IMAGE: {
            return [
                ...state,
                {...action.payload},
            ];
        }
        case REMOVE_CUR_REF_IMAGE: {
            return state.filter((refImage) => refImage.parentId !== action.payload);
        }
        default:
            return state;
        
    }

};

export default curRefImages;
