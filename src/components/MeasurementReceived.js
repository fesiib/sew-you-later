import { useDispatch, useSelector } from "react-redux";
import { allBPs} from "../reducers/measurements";

const propsConstUS = {
    measurementsTitle: "Measurements",
    measurementsPlaceholderSent: "Waiting for customer's response...",
    measurementsPlaceholderReceived: "No Measurements",
};
const propsConstTR = {
    measurementsTitle: "Ölçüler",
    measurementsPlaceholderSent: "Müşteriden yanıt bekleniyor...",
    measurementsPlaceholderReceived: "Ölçü yok",
};

function MeasurementReceived(props) {
    const language = useSelector(state => state.langReducer.language);
    const propsConst = (language == "TUR" ? propConstTR : propConstUS);

    const {
        requestedBodyParts,
        measurements,
        status
    } = useSelector(state => state.measurementsReducer);


    if (status == 0) {
        return (<div></div>);
    }

    const formatMeasurementsOrderDetails = (indexes, {unit, values}) => {
        console.log(indexes, values);
        if (values.length === 0) {
            if (status === 3) {
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
                <div key={id} className="flex row justify-between">
                    <span className="flex-start"> {allBPs[index]}: </span>
                    <span className="flex-end"> {values[id]} {unit} </span>
                </div>);
        });
    };
    const formatMeasurements = (indexes, {unit, values}) => {
        console.log(indexes, values);
        if (values.length === 0) {
            if (status === 3) {
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
                <div key={id} className="flex row justify-between">
                    <span className="flex-start"> {allBPs[index]}: </span>
                    <span className="flex-end"> {values[id]} {unit} </span>
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