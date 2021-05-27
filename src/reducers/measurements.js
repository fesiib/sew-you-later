const ADD_BP = "measurements/addBP";
const REMOVE_BP = "measurements/removeBP";
const EDIT_MSG = "measurements/editMsg";
const SEND_RQ = "measurements/sendRq"; // status: 0 -> 1
const RESEND_RQ = "measurements/resendRq"; // status: 1 -> 2
const RECEIVE_RQ = "measurements/receiveRq"; // status: 1 or 2 -> 3
const RESET_BP = "measurements/reset";

export const IMMUTABLE = 4;


const propsConst = {
    placeholder: "No Selection",
    neckLabel: "Neck",
    bustLabel: "Bust",
    waistLabel: "Waist",
    hipsLabel: "Hips",
    thighLabel: "Thigh",
    kneeLabel: "Knee",
    calfLabel: "Calf",
    waistToKneeLabel: "Waist to Knee",
    ankleLabel: "Ankle",
    inseamLabel: "Inseam",
    riseLabel: "Rise",
    waistBackLabel: "Waist-Back",
    outseamLabel: "Outseam",
    neckBackLabel: "Neck-Back",
    backLengthLabel: "Back Length",
    wristLabel: "Wrist",
    sleeveLengthLabel: "Sleeve Length",
    shoulderLabel: "Shoulder",
};

export const allBPs = [
    propsConst.placeholder,
    propsConst.neckLabel,
    propsConst.bustLabel,
    propsConst.waistLabel,
    propsConst.hipsLabel,
    propsConst.thighLabel,
    propsConst.kneeLabel,
    propsConst.calfLabel,
    propsConst.waistToKneeLabel,
    propsConst.ankleLabel,
    propsConst.inseamLabel,
    propsConst.riseLabel,
    //propsConst.waistBackLabel,
    propsConst.outseamLabel,
    //propsConst.neckBackLabel,
    propsConst.backLengthLabel,
    propsConst.wristLabel,
    propsConst.sleeveLengthLabel,
    propsConst.shoulderLabel
];

export const addBP = (payload) => ({
    type: ADD_BP,
    payload,
});


export const removeBP = (payload) => ({
    type: REMOVE_BP,
    payload,
});

export const editMsg = (payload) => ({
    type: EDIT_MSG,
    payload,
});

export const sendRq = () => ({
    type: SEND_RQ,
});

export const resendRq = () => ({
    type: RESEND_RQ,
});

export const receiveRq = (payload) => ({
    type: RECEIVE_RQ,
    payload,
});

export const resetBP = () => ({
    type: RESET_BP,
});

const initialState = {
    bodyParts: [],
    requestedBodyParts: [],
    measurements: [],
    message: "",
    status: 0,
};


const measurementsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BP: {
            if (action.payload < 0 || action.payload >= allBPs.length) {
                return state;
            }
            return {
                ...state,
                bodyParts: [...state.bodyParts, action.payload],
            }
        }
        case REMOVE_BP: {
            if (action.payload < 0 || action.payload >= allBPs.length) {
                return state;
            }
            for (let i = 0; i < state.bodyParts.length; i++) {
                if (state.bodyParts[i] === action.payload) {
                    let newBodyParts = [...state.bodyParts.slice(0, i), ...state.bodyParts.slice(i+1)];
                    return {
                        ...state,
                        bodyParts: newBodyParts,
                    }
                }
            }
            return state;
        }
        case EDIT_MSG: {
            if (action.payload == null) {
                return state;
            }
            return {
                ...state,
                message: action.payload,
            }
        }
        case SEND_RQ: {
            return {
                ...state,
                status: 1,
                requestedBodyParts: [...state.bodyParts],
                measurements: [],
            }
        }
        case RESEND_RQ: {
            return {
                ...state,
                status: 2,
                requestedBodyParts: [...state.bodyParts],
                measurements: [],
            }
        }
        case RECEIVE_RQ: {
            //update measurements
            return {
                ...state,
                status: 3,
                measurements: action.payload,
            }
        }
        case RESET_BP: {
            return {
                ...state,
                bodyParts: [],
            }
        }
        default:
                return state;
    }
}

export default measurementsReducer;