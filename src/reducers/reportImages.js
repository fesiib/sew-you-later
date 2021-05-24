const ADD_IMAGE = "ADD_IMAGE";
const DELETE_IMAGE = "DELETE_IMAGE"

export function addImage(src, parentId) {
    return {
        type: ADD_IMAGE,
        payload: {
            src: src,
            parentReportId: parentId,
        }
    }
};

export function deleteImage(id) {
    return {
        type: DELETE_IMAGE,
        payload: id,
    }
};

const initialState = [];

export default function reportImages(state = initialState, action) {
    switch (action.type) {
        case ADD_IMAGE: {
            var newid = 0;
            if(state.length !== 0)
                newid = state[state.length - 1].id + 1;
            
            return [
                ...state,
                {
                    ...action.payload,
                    id: newid
                }
            ];
        }

        case DELETE_IMAGE: {
            return state.filter((image) => image.id !== action.payload);
        }
        default:
            return state;
    }
}