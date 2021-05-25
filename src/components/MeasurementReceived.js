import { useDispatch, useSelector } from "react-redux";
import { allBPs, editMsg, IMMUTABLE } from "../reducers/measurements";

const propsConst = {
    measurementsTitle: "Measurements",
    measurementsPlaceholderSent: "Waiting for cusomter's response...",
    measurementsPlaceholderReceived: "No Measurements",
};

function MeasurementReceived(props) {
    const dispatch = useDispatch();
    const {
        bodyParts,
        measurements,
        status
    } = useSelector(state => state.measurementsReducer);


    const onChange = (event) => {
        event.preventDefault();
        event.stopPropagation();
    }
    if (status == 0) {
        return (<div></div>);
    }

    const formatMeasurements = (indexes, values) => {
        console.log(indexes, values);
        if (values.length == 0) {
            if (status == 3) {
                return (
                    <p> {propsConst.measurementsPlaceholderReceived} </p>
                );
            }
            return (
                <p> {propsConst.measurementsPlaceholderSent} </p>
            );
        }
        return indexes.map((index, id) => {
            return (<p> {allBPs[index]}: {values[id]} </p>);
        });
    };

    return (
        <div className="min-w-min card m-10 p-3">
            <h2> {propsConst.measurementsTitle} </h2>
            {formatMeasurements(bodyParts, measurements)}
        </div>
    );
};

export default MeasurementReceived;