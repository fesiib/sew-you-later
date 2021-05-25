const ADD_NEW_REF_IMAGE = "ADD_NEW_REF_IMAGE";
const REMOVE_NEW_REF_IMAGE = "REMOVE_NEW_REF_IMAGE";

export const addNewRefImage = (src, parentId) => ({
    type: ADD_NEW_REF_IMAGE,
    payload: {
        src: src,
        parentId: parentId,
    }
});


export const removeNewRefImage = (parentId) => ({
    type: REMOVE_NEW_REF_IMAGE,
    payload: parentId,
});

const initialState = [];

const newRefImages = (state = initialState, action) => {

    // console.log('now an action: ' + action.type);
    // console.log('before the action: ' + state);
    switch(action.type) {
        case ADD_NEW_REF_IMAGE: {
            return [
                ...state,
                {...action.payload},
            ];
        }
        case REMOVE_NEW_REF_IMAGE: {
            return state.filter((refImage) => refImage.parentId !== action.payload);
        }
        default:
            return state;
        
    }

};

export default newRefImages;
