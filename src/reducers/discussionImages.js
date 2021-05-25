const ADD_DISCUSSION_IMAGE = "ADD_DISCUSSION_IMAGE";
const DELETE_DISCUSSION_IMAGE = "DELETE_DISCUSSION_IMAGE"

export function addImage(src, parentId) {
    return {
        type: ADD_DISCUSSION_IMAGE,
        payload: {
            src: src,
            parentId: parentId,
        }
    };
};

export function deleteImage(src="", parentId="", id="") {
    return {
        type: DELETE_DISCUSSION_IMAGE,
        payload: {
            parentId: parentId,
            src: src,
            id: id,
        }
    };
};

const initialState = [];

export default function discussionImages(state = initialState, action) {
    switch (action.type) {
        case ADD_DISCUSSION_IMAGE: {
            let id = 0;
            if(state.length > 0)
                id = state[state.length - 1].id + 1;
            return [
                ...state,
                {
                    ...action.payload,
                    id: id,
                }
            ];
        }

        case DELETE_DISCUSSION_IMAGE: {
            return state.filter((image) => (image.id != action.payload.id && (image.parentId != action.payload.parentId || image.src != action.payload.src)));
        }

        default:
            return state;
    }
};