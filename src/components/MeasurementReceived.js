import { useDispatch, useSelector } from "react-redux";
import { allBPs, editMsg, IMMUTABLE } from "../reducers/measurements";

const propsConst = {
    measurementsTitle: "Measurements",
    measurementsPlaceholderSent: "Waiting for customer's response...",
    measurementsPlaceholderReceived: "No Measurements",
};

function MeasurementReceived(props) {
    const dispatch = useDispatch();
    const {
        requestedBodyParts,
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

    const formatMeasurementsOrderDetails = (indexes, values) => {
        console.log(indexes, values);
        if (values.length == 0) {
            if (status == 3) {
                return (
                    <p className="row-span-1"> {propsConst.measurementsPlaceholderReceived} </p>
                );
            }
            return (
                <p className="row-span-1"> {propsConst.measurementsPlaceholderSent} </p>
            );
        }
        return indexes.map((index, id) => {
            return (
                <div className="flex row justify-between">
                    <span className="flex-start"> {allBPs[index]}: </span>
                    <span className="flex-end"> {values[id]} </span>
                </div>);
        });
    };
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
            return (
                <div className="flex row justify-between">
                    <span className="flex-start"> {allBPs[index]}: </span>
                    <span className="flex-end"> {values[id]} </span>
                </div>);
        });
    };

    if (props != undefined && props.vars == "orderDetails") {
        return (
            <div className="min-w-min bg-white rounded-xl p-4">
                <h1 className="min-w-min mb-2"> {propsConst.measurementsTitle} </h1>
                <div className="">
                    {formatMeasurementsOrderDetails(requestedBodyParts, measurements)}
                </div>
            </div>
        );    
    }
    return (
        <div className="card ml-2 p-4">
            <h2> {propsConst.measurementsTitle} </h2>
            {formatMeasurements(requestedBodyParts, measurements)}
        </div>
    );
};

export default MeasurementReceived;