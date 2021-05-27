const ADD_IMAGE = "ADD_IMAGE";
const DELETE_IMAGE = "DELETE_IMAGE"
const SEND_DRAFT_IMAGES = "SEND_DRAFT_IMAGES"

export function addImage(src, parentId, orderId) {
    return {
        type: ADD_IMAGE,
        payload: {
            src: src,
            parentReportId: parentId,
            orderId: orderId,
        }
    };
};

export function deleteImage(id) {
    return {
        type: DELETE_IMAGE,
        payload: id,
    };
};

export function sendDraftImages(parentReportId, orderId) {
    return {
        type: SEND_DRAFT_IMAGES,
        payload: {
            parentReportId: parentReportId,
            orderId: orderId,
        }
    };
}

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

        case SEND_DRAFT_IMAGES: {
            return state.map(image => {
                    if(image.parentReportId === -1)
                        return {
                            ...image,
                            parentReportId: action.payload.parentReportId,
                            orderId: action.payload.orderId,
                        };
                    return image;
                }
            )
        }
        default:
            return state;
    }
}