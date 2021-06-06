import ImageWithText from './ImageWithText';
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { useSelector, useDispatch } from 'react-redux';
import { removeNewOrder, updateNewOrder } from '../reducers/newOrdersList';
import { removeNewRefImage } from '../reducers/newRefImages';
import { addCurOrder } from '../reducers/curOrdersList';
import { addCurRefImage } from '../reducers/curRefImages';
import { makeCurOrderAvId } from '../reducers/curOrdersId';
import { useEffect } from 'react';
import Popup from 'reactjs-popup';
import ReportCard from './ReportCard';

const propConstUS = {
    refImagesTitle: "Reference Images",
    orderDescTitle: "Order Description",
    orderDetailsTitle: "Order Details",
    customerInfoTitle: "Customer Information",
    reportText: "Report",
    acceptText: "Accept",
    declineText: "Decline",

    reportTitle: "Report this order?",
    reportBody: `Looks like this order is not appropriate. You can report this order back to the 
                 customer and delete this order from your list. To do that, please specify the 
                 reason below.`,
    reportDecline: "Decline",
    reportDelete: "Report & Delete",
    steps: "Order Confirmation-Discussion-Measurement Record-Customer's Response-Production",
    nextStepDesc: "You will have a discussion with the customer and might want to come back to view the notes at anytime.",
    curStepDesc: "Start a discussion with the customer",
    
};

const propConstTR = {
    refImagesTitle: "Referans Resimler",
    orderDescTitle: "Sipariş Açıklaması",
    orderDetailsTitle: "Sipariş Detayı",
    customerInfoTitle: "Müşteri Bilgileri",
    reportText: "Bildir",
    acceptText: "Kabul et",
    declineText: "Reddet",

    reportTitle: "Kötüye kullanım bildir?",
    reportBody: `Görünüşe göre bu sipariş uygunsuz. Bu siparişi bildirebilir
     ve listenizden silebilirsiniz. Lütfen aşağıda nedenini belirtiniz.`,
    reportDecline: "Reddet",
    reportDelete: "Bildir ve Sil",
    steps: "Sipariş Onayı-Görüşme-Ölçü Formu-Müşterinin Dönütü-Üretim",
    nextStepDesc: "Müşteriyle görüşme yapılacak. İstediğiniz zaman alınan notları görüntülemek için gelebilirsiniz.",
    curStepDesc: "Müşteri ile görüşmeyi başlat",
    
};

function NewOrderDetails(props) {
    const language = useSelector(state => state.langReducer.language);
    const propConst = (language == "TUR" ? propConstTR : propConstUS);

    const newRefImages = useSelector(state => state.newRefImages);
    const curOrdersId = useSelector(state => state.curOrdersId);
    const dispatch = useDispatch();
    const referenceImages = newRefImages.filter(refImage => refImage.parentId == props.vars.id);

    useEffect(() => {
        dispatch(updateNewOrder({ ...props.vars, unseen: false }, props.vars.id));
    });

    const appendCurOrder = (curOrder) => {
        dispatch(addCurOrder(curOrder, curOrdersId.avId));
        newRefImages.filter(refImage => refImage.parentId == props.vars.id).forEach(refImage => dispatch(addCurRefImage(refImage.src, curOrdersId.avId)));
        props.setAcceptedOrder(curOrdersId.avId);
        dispatch(makeCurOrderAvId());
    };

    const transformToCurOrder = () => {
        return {
            ...props.vars,
            estimatedDue: "2021-06-29", // YYYY-MM-DD Now it is a default value, fix it later
            steps: propConst.steps,
            curStepIndex: 1,
            curStepStatus: "ongoing", // It will be either "incomplete", "ongoing", "complete". Also, the previous steps are always assumed to be "complete"!
            nextStepDesc: propConst.nextStepDesc,
            curStepDesc: propConst.curStepDesc,
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

    // Report
    function popupClick(e, close) {
        if (typeof e.target.className.includes === "function")
            if (e.target.className.includes("back")) {

            }
    };

    const deleteOrder = () => {
        dispatch(removeNewOrder(props.vars.id));
        setTimeout(function () {
            window.location = "/new-orders";
        }, 0)
    }

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
                        <Popup
                            // key={index}
                            // open={popUpState.imgSrc == img.src}
                            trigger={
                                <button href="#" className="flex flex-row justify-end items-center red">
                                    <ExclamationCircleIcon className="h-5" />
                                    <p>{propConst.reportText}</p>
                                </button>
                            }
                            modal
                            nested
                            position="center center"
                            contentStyle={{ width: "100%", height: "100%", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", backgroundColor: "rgba(0,0,0,0.5)" }}
                        >
                            {close => (
                                <div onClick={(e) => popupClick(e, close)} className="w-full h-full back">
                                    <div className="w-full absolute top-1/2 transform -translate-y-1/2 flex justify-evenly flex-wrap back">
                                        <ReportCard
                                            title={propConst.reportTitle}
                                            body={propConst.reportBody}
                                            onDecline={close}
                                            onDelete={deleteOrder}
                                            decline={propConst.reportDecline}
                                            delete={propConst.reportDelete} />
                                    </div>
                                </div>
                            )
                            }
                        </Popup>
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