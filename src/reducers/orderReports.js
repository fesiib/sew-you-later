const ADD_REPORT = "ADD_REPORT";
const DELETE_REPORT = "DELETE_REPORT";
const ADD_BLANK_REPORT = "ADD_BLANK_REPORT";
const UPDATE_DRAFT_REPORT_TITLE = "UPDATE_DRAFT_REPORT_TITLE";
const UPDATE_DRAFT_REPORT_BODY = "UPDATE_DRAFT_REPORT_BODY";
const SEND_DRAFT_REPORT = "SEND_DRAFT_REPORT";

export function addBlankReport(date, orderId) {
    return {
        type: ADD_BLANK_REPORT,
        payload: {
            postDate: date,
            title: "",
            body: "",
            orderId: orderId,
        },
    };
}

export function deleteReport(id) {
    return {
        type: DELETE_REPORT,
        payload: id,
    };
}

export function updateDraftReportTitle(title, orderId) {
    return {
        type: UPDATE_DRAFT_REPORT_TITLE,
        payload: {
            title: title,
            orderId: orderId,
        } 
    };
}

export function updateDraftReportBody(body, orderId) {
    return {
        type: UPDATE_DRAFT_REPORT_BODY,
        payload: {
            body: body,
            orderId: orderId,
        } 
    };
}

export function sendDraftReport(availableId, orderId, date) {
    return {
        type: SEND_DRAFT_REPORT,
        payload: {
            orderId: orderId,
            postDate: date,
            id: availableId,
        },
    };
}

const initialState = [];

export default function orderReports(state = initialState, action) {
    switch (action.type) {
        case ADD_BLANK_REPORT: {
            return [
                ...state,
                {
                    ...action.payload,
                    id: -1,
                }
            ];
        }
        case DELETE_REPORT: {
            return state.filter((report) => report.id !== action.payload);
        }
        
        case UPDATE_DRAFT_REPORT_TITLE: {
            return [
                ...state.filter((report) => (report.id !== -1 || report.orderId !== action.payload.orderId)),
                {
                    ...state.find((report) => (report.id === -1 && report.orderId === action.payload.orderId)),
                    title: action.payload.title,
                }
            ];
        }
        case UPDATE_DRAFT_REPORT_BODY: {
            return [
                ...state.filter((report) => (report.id !== -1 || report.orderId !== action.payload.orderId)),
                {
                    ...state.find((report) => (report.id === -1 && report.orderId === action.payload.orderId)),
                    body: action.payload.body,
                }
            ];
        }
        case SEND_DRAFT_REPORT: {
            return [
                ...state.filter(report => (report.id !== -1)),
                {
                    ...state.find((report) => (report.id === -1 && report.orderId === action.payload.orderId)),
                    id: action.payload.id,
                },
                ...state.filter(report => (report.id === -1 && report.orderId !== action.payload.orderId)),
            ]
        }
        default:
            return state;
    }
}