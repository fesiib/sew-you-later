const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

export const changeLanguage = (language) => ({
    type: CHANGE_LANGUAGE,
    payload: {
        language: language,
    }
});

const initialState = {
    language: "TUR",
};

const langReducer = (state = initialState, action) => {

    switch(action.type) {
        case CHANGE_LANGUAGE: {
            return { ...state, language: action.payload.language }
        }

        default:
            return state
    }
};

export default langReducer;
