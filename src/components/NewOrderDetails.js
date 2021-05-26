import ImageWithText from './ImageWithText';
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { useSelector, useDispatch } from 'react-redux';
import { removeNewOrder } from '../reducers/newOrdersList';
import { removeNewRefImage } from '../reducers/newRefImages';
import { addCurOrder } from '../reducers/curOrdersList';
import { addCurRefImage } from '../reducers/curRefImages';
import { makeCurOrderAvId } from '../reducers/curOrdersId';

const propConst = {
    refImagesTitle: "Reference Images",
    orderDescTitle: "Order Description",
    orderDetailsTitle: "Order Details",
    customerInfoTitle: "Customer Information",
    reportText: "Report",
    acceptText: "Accept",
    declineText: "Decline",
};

function NewOrderDetails(props) {

    const newRefImages = useSelector(state => state.newRefImages);
    const curOrdersId = useSelector(state => state.curOrdersId);
    const dispatch = useDispatch();
    const referenceImages = newRefImages.filter(refImage => refImage.parentId == props.vars.id);

    const appendCurOrder = (curOrder) => {
        dispatch(addCurOrder(curOrder, curOrdersId.avId));
        newRefImages.filter(refImage => refImage.parentId == props.vars.id).forEach(refImage => dispatch(addCurRefImage(refImage.src, curOrdersId.avId)));
        props.setAcceptedOrder(curOrdersId.avId);
        dispatch(makeCurOrderAvId());
    };

    const transformToCurOrder = () => {
        return {
            ...props.vars,
            estimatedDue: "2021-05-29", // YYYY-MM-DD Now it is a default value, fix it later
            steps: "Order Confirmation-Discussion-Measurement Record-Customer's Response-Production-Delivery",
            curStepIndex: 1,
            curStepStatus: "ongoing", // It will be either "incomplete", "ongoing", "complete". Also, the previous steps are always assumed to be "complete"!
            nextStepDesc: "You will have a discussion with the customer and might want to take notes with so that you can come back to view the notes at anytime.",
            curStepDesc: "Start a discussion with the customer",
            notificationPage: "X", // another possible options: "Measurements", "Order Details" (depending on) also "" if no notification
            nextStepPage: "discussion-search",
        }
    };

    const removeTheNewOrder = () => {
        dispatch(removeNewRefImage(props.vars.id));
        dispatch(removeNewOrder(props.vars.id));
    };

    const declineTheOrder = () => {
        removeTheNewOrder();
    };

    const acceptTheOrder = () => {
        appendCurOrder(transformToCurOrder());
        removeTheNewOrder();
    };

    return (
        <div className="m-10 min-w-min flex flex-col bg-white rounded-xl">
            <h1 className="mt-10 mx-5 text-center"> {propConst.orderDetailsTitle} </h1>
            <div className="flex flex-row m-10">
                <div className="flex flex-col">
                    <div className="">
                        <h2 className="my-5"> {propConst.orderDescTitle} </h2>
                        <p className="text-black">
                            {props.vars.orderDesc}
                        </p>
                    </div>
                    <div className="">
                        <h2 className="my-5"> {propConst.refImagesTitle} </h2>
                        <div className="flex gap-5 flex-wrap">
                            {referenceImages.map((refImage) => (
                                <img className="w-36 h-36 thumbnail" src={refImage.src} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between ml-10">
                    <div className="my-5 text-right">
                        <h2 className="whitespace-nowrap mb-5"> {propConst.customerInfoTitle} </h2>
                        <div className="">
                            <p className="whitespace-nowrap">{props.vars.customerName}</p>
                            <p>{props.vars.customerInfo}</p>
                            <p className="font-bold">{props.vars.customerLocation}</p>
                            <p>{props.vars.customerEmail}</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button href="#" className="flex flex-row justify-end items-center red">
                            <ExclamationCircleIcon className="h-5" />
                            <p>{propConst.reportText}</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-20 flex flex-row space-x-4 mx-10 mb-8 -mt-2">
                <button className="flex-grow red cursor-pointer text-xl" onClick={() => declineTheOrder()}>
                    {propConst.declineText}
                </button>
                <button className="flex-grow green cursor-pointer text-xl" onClick={() => acceptTheOrder()}>
                    {propConst.acceptText}
                </button>
            </div>
        </div>
    );

};

export default NewOrderDetails;