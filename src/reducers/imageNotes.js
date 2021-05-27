const ADD_NOTE = "ADD_NOTE";
const DELETE_NOTE = "DELETE_NOTE"
const UPDATE_DRAFT_NOTE_TITLE = "UPDATE_DRAFT_NOTE_TITLE";
const UPDATE_DRAFT_NOTE_BODY = "UPDATE_DRAFT_NOTE_BODY";
const SEND_DRAFT_NOTES = "SEND_DRAFT_NOTES";

export function addNote(title, body, parentId, reportId, orderId) {
    return {
        type: ADD_NOTE,
        payload: {
            title: title,
            body: body,
            parentImageId: parentId,
            reportId: reportId,
            orderId: orderId,
        }
    }
};

export function deleteNote(id) {
    return {
        type: DELETE_NOTE,
        payload: id
    }
};

export function updateDraftNoteTitle(id, title) {
    return {
        type: UPDATE_DRAFT_NOTE_TITLE,
        payload: {
            id: id,
            title: title,
        }
    }
};

export function updateDraftNoteBody(id, body) {
    return {
        type: UPDATE_DRAFT_NOTE_BODY,
        payload: {
            id: id,
            body: body,
        }
    }
};

export function sendDraftNotes(reportId, orderId) {
    return {
        type: SEND_DRAFT_NOTES,
        payload: {
            reportId: reportId,
            orderId: orderId,
        },
    }
};

const initialState = [];

export default function imageNotes(state = initialState, action) {
    switch (action.type) {
        case ADD_NOTE: {
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

        case DELETE_NOTE: {
            return state.filter((note) => note.id !== action.payload);
        }
        case UPDATE_DRAFT_NOTE_TITLE: {
            return state.map(note => {
                    if(note.id == action.payload.id)
                        return {
                            ...note,
                            title: action.payload.title
                        };
                    return note;
                }
            )
        }
        case UPDATE_DRAFT_NOTE_BODY: {
            return state.map(note => {
                    if(note.id == action.payload.id)
                        return {
                            ...note,
                            body: action.payload.body
                        };
                    return note;
                }
            )
        }
        case SEND_DRAFT_NOTES: {
            return state.map(note => {
                    if(note.reportId === -1 && note.orderId === action.payload.orderId)
                        return {
                            ...note,
                            reportId: action.payload.reportId,
                        };
                    return note;
                }
            )
        }
        default:
            return state;
    }
}