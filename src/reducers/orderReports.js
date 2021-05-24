const ADD_REPORT = "ADD_REPORT";
const DELETE_REPORT = "DELETE_REPORT";
const ADD_BLANK_REPORT = "ADD_BLANK_REPORT";

export function addReport(title, description, date) {
    return {
        type: ADD_REPORT,
        payload: {
            postDate: date,
            title: title,
            description: description,
        }
    };
}

export function deleteReport(id) {
    return {
        type: DELETE_REPORT,
        payload: id,
    };
}

export function addBlankReport(date) {
    return {
        type: ADD_BLANK_REPORT,
        payload: {
            postDate: date,
            title: "asd",
            description: "",
        },
    }
}

const initialState = [];

export default function orderReports(state = initialState, action) {
    switch (action.type) {
        case ADD_REPORT: {
            var newid = 0;
            if(state.length !== 0)
                newid = state[state.length - 1].id + 1;
            
            return [
                ...state,
                {
                    ...action.payload,
                    id: newid,
                }
            ];
        }
        case DELETE_REPORT: {
            return state.filter((report) => report.id !== action.payload);
        }
        case ADD_BLANK_REPORT: {
            return [
                ...state,
                {
                    ...action.payload,
                    id: -1,
                }
            ];
        }
        default:
            return state;
    }
}