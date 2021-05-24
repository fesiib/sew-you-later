const ADD_REPORT = "ADD_REPORT";
const DELETE_REPORT = "DELETE_REPORT";
const ADD_BLANK_REPORT = "ADD_BLANK_REPORT";
const UPDATE_DRAFT_REPORT_TITLE = "UPDATE_DRAFT_REPORT_TITLE";
const UPDATE_DRAFT_REPORT_BODY = "UPDATE_DRAFT_REPORT_BODY";

export function addReport(title, body, date) {
    return {
        type: ADD_REPORT,
        payload: {
            postDate: date,
            title: title,
            body: body,
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
            title: "",
            body: "",
        },
    }
}

export function updateDraftReportTitle(title) {
    return {
        type: UPDATE_DRAFT_REPORT_TITLE,
        payload: title,
    }
}

export function updateDraftReportBody(body) {
    return {
        type: UPDATE_DRAFT_REPORT_BODY,
        payload: body,
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
        case UPDATE_DRAFT_REPORT_TITLE: {
            return [
                ...state.filter((report) => report.id !== -1),
                {
                    ...state[state.length - 1],
                    title: action.payload
                }
            ];
        }
        case UPDATE_DRAFT_REPORT_BODY: {
            return [
                ...state.filter((report) => report.id !== -1),
                {
                    ...state[state.length - 1],
                    body: action.payload
                }
            ];
        }
        default:
            return state;
    }
}