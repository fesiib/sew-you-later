import ImageWithText from './ImageWithText';
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import {useSelector, useDispatch} from 'react-redux';
import { removeNewOrder } from '../reducers/newOrdersList';
import {removeNewRefImage} from '../reducers/newRefImages';
import {addCurOrder} from '../reducers/curOrdersList';
import {addCurRefImage} from '../reducers/curRefImages';
import {makeCurOrderAvId} from '../reducers/curOrdersId';

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
            steps: "Order Confirmation-Customer's Response-Discussion-Measurement Record-Production-Delivery",
            curStepIndex: 1,
            curStepStatus: "incomplete", // It will be either "incomplete", "ongoing", "complete". Also, the previous steps are always assumed to be "complete"!
            nextStepDesc: "You will have a discussion with the customer, after the customer responds",
            curStepDesc: "Waiting for customer's response for a video call date",
            notificationPage: "X", // another possible options: "measurement...." (depending on) also "" if no notification
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
            <h1 className="mt-10 ml-10 mr-10 text-center"> {propConst.orderDetailsTitle} </h1>
            <div className="flex flex-row m-10">
                <div className="flex flex-col">
                    <div className="">
                        <h2 className="m-5"> {propConst.orderDescTitle} </h2>
                        <p className="text-black">
                            {props.vars.orderDesc}
                        </p>    
                    </div>
                    <div className="">
                        <h2 className="m-5"> {propConst.refImagesTitle} </h2>
                        <div className = "flex gap-5 flex-wrap">
                            {referenceImages.map((refImage) => (
                                <img className="w-36 h-36 thumbnail" src={refImage.src}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="m-5 text-right">
                        <h2 className="whitespace-nowrap"> {propConst.customerInfoTitle} </h2>
                        <div className="">
                            <p className="whitespace-nowrap">{props.vars.customerName}</p>
                            <p>{props.vars.customerInfo}</p>
                            <p className="font-bold">{props.vars.customerLocation}</p>
                            <p>{props.vars.customerEmail}</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <a href="#" className="flex flex-row justify-end items-center font-bold text-gray-500">
                            <ExclamationCircleIcon className="h-5"/>
                            <p>{propConst.reportText}</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="h-20 flex flex-row">
                <button className="flex-grow bg-green-500 active:bg-green-700 cursor-pointer" onClick={() => acceptTheOrder()}> 
                    {propConst.acceptText} 
                </button>
                <button className="flex-grow bg-red-500 active:bg-red-700 cursor-pointer" onClick={() => declineTheOrder()}> 
                    {propConst.declineText} 
                </button>
            </div>
        </div>
    );

};

export default NewOrderDetails;