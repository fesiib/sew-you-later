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
                <div className="flex flex row justify-between">
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
                <div className="flex flex row justify-between">
                    <span className="flex-start"> {allBPs[index]}: </span>
                    <span className="flex-end"> {values[id]} </span>
                </div>);
        });
    };

    if (props != undefined && props.vars == "orderDetails") {
        //my-10 grid grid-rows-2 grid-cols-3 place-content-evenly bg-white rounded-xl
        return (
            <div className=" min-w-min grid auto-rows-auto grid-cols-3 place-content-evenly bg-white rounded-xl p-3">
                <h1 className="min-w-min  ml-5 row-span-1 col-span-3"> {propsConst.measurementsTitle} </h1>
                <div className="ml-5 col-span-3">
                    {formatMeasurementsOrderDetails(bodyParts, measurements)}
                </div>
            </div>
        );    
    }
    return (
        <div className="card m-10 p-3">
            <h2> {propsConst.measurementsTitle} </h2>
            {formatMeasurements(bodyParts, measurements)}
        </div>
    );
};

export default MeasurementReceived;