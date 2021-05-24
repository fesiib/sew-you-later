const ADD_NOTE = "ADD_NOTE";
const DELETE_NOTE = "DELETE_NOTE"

export function addNote(title, description, parentId) {
    return {
        type: ADD_NOTE,
        payload: {
            title: title,
            description: description,
            parentImageId: parentId
        }
    }
};

export function deleteNote(id) {
    return {
        type: DELETE_NOTE,
        payload: id
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
        default:
            return state;
    }
}