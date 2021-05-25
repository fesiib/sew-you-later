const ADD_DISCUSSION_NOTE = "ADD_DISCUSSION_NOTE";
const DELETE_DISCUSSION_NOTE = "DELETE_DISCUSSION_NOTE"
const UPDATE_DISCUSSION_NOTE_TITLE = "UPDATE_DISCUSSION_NOTE_TITLE";
const UPDATE_DISCUSSION_NOTE_BODY = "UPDATE_DISCUSSION_NOTE_BODY";
// const SEND_DRAFT_NOTES = "SEND_DRAFT_NOTES";

export function addNote(title, body, parentId) {
    return {
        type: ADD_DISCUSSION_NOTE,
        payload: {
            title: title,
            body: body,
            parentId: parentId,
        }
    }
};

export function deleteNote(id) {
    return {
        type: DELETE_DISCUSSION_NOTE,
        payload: id
    }
};

export function updateDiscussionNoteTitle(id, title) {
    return {
        type: UPDATE_DISCUSSION_NOTE_TITLE,
        payload: {
            id: id,
            title: title,
        }
    }
};

export function updateDiscussionNoteBody(id, body) {
    return {
        type: UPDATE_DISCUSSION_NOTE_BODY,
        payload: {
            id: id,
            body: body,
        }
    }
};

// export function sendDraftNotes(id) {
//     return {
//         type: SEND_DRAFT_NOTES,
//         payload: id,
//     }
// };

const initialState = [];

export default function discussionImageNotes(state = initialState, action) {
    switch (action.type) {
        case ADD_DISCUSSION_NOTE: {
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

        case DELETE_DISCUSSION_NOTE: {
            return state.filter((note) => note.id !== action.payload);
        }
        case UPDATE_DISCUSSION_NOTE_TITLE: {
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
        case UPDATE_DISCUSSION_NOTE_BODY: {
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
        // case SEND_DRAFT_NOTES: {
        //     return state.map(note => {
        //             if(note.reportId === -1)
        //                 return {
        //                     ...note,
        //                     reportId: action.payload
        //                 };
        //             return note;
        //         }
        //     )
        // }
        default:
            return state;
    }
}