import { useDispatch, useSelector } from "react-redux";
import { editMsg, IMMUTABLE } from "../reducers/measurements";

const propVarsUS = {
    measurementNotesPlaceholder: "Enter Extra Notes if needed",
};

const propVarsTR = {
    measurementNotesPlaceholder: "Gerekliyse ekstra not ekleyin",
};

function MeasurementMessage(props) {
    const language = useSelector(state => state.langReducer.language);
    const propVars = (language == "TUR" ? propVarsTR : propVarsUS);

    const dispatch = useDispatch();
    const {
        message,
        status
    } = useSelector(state => state.measurementsReducer);

    const _editMsg = (msg) => {
        dispatch(editMsg(msg));
    }

    const onChange = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (event.target.value !== undefined)
            _editMsg(event.target.value);
    }
    return (
        <div className="max-w-2xl m-10">
            <textarea 
                readOnly={(status===IMMUTABLE || props.isPrevOrder)}
                value={message}
                onChange={onChange}
                placeholder={propVars.measurementNotesPlaceholder}
                rows="10"
                className="card p-3 resize-none w-full border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
        </div>
    );
};

export default MeasurementMessage;