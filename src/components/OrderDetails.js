import ImageWithText from './ImageWithText';
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { useSelector, useDispatch } from 'react-redux';
import { removeCurOrder } from '../reducers/curOrdersList';
import Popup from 'reactjs-popup';
import ReportCard from './ReportCard';

const propConstUS = {
    refImagesTitle: "Reference Images",
    orderDescTitle: "Order Description",
    orderDetailsTitle: "Order Details",
    customerInfoTitle: "Customer Information",
    reportText: "Report",

    reportTitle: "Report this order?",
    reportBody: `Looks like this order is not appropriate. You can report this order back to the 
                 customer and delete this order from your list. To do that, please specify the 
                 reason below.`,
    reportDecline: "Decline",
    reportDelete: "Report & Delete",
};

const propConstTR = {
    refImagesTitle: "Referans Resimler",
    orderDescTitle: "Sipariş Açıklaması",
    orderDetailsTitle: "Sipariş Detayı",
    customerInfoTitle: "Müşteri Bilgileri",
    reportText: "Bildir",

    reportTitle: "Kötüye kullanım bildir?",
    reportBody: `Görünüşe göre bu sipariş uygunsuz. Bu siparişi bildirebilir
    ve listenizden silebilirsiniz. Lütfen aşağıda nedenini belirtiniz.`,
    reportDecline: "Reddet",
    reportDelete: "Bildir ve Sil",
};

const propVars = {
    orderTitle: "T shirt with Pocket",
    orderDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Phasellus condimentum commodo eros ac dapibus. 
    Mauris convallis turpis ac turpis dapibus, at malesuada quam molestie. 
    Mauris sed ex sagittis, dapibus mauris a, rhoncus felis. 
    Proin tempus enim ac tincidunt luctus. Suspendisse eu turpis vel erat vehicula scelerisque eget at nisi. 
    In odio lacus, laoreet vel rutrum eu, pharetra in quam. 
    Quisque non tincidunt mauris. `,
    customerName: "Mehmet Hamza Erol",
    customerInfo: "Male, 19",
    customerLocation: "Korea/Daejeon",
    customerEmail: "beyaldiz@kaist.ac.kr",
};

function OrderDetails(props) {
    const language = useSelector(state => state.langReducer.language);
    const propConst = (language == "TUR" ? propConstTR : propConstUS);

    const curRefImages = useSelector(state => state.curRefImages);
    const referenceImages = curRefImages.filter((refImage) => refImage.parentId == props.vars.id);
    const isPrevOrder = (props.vars.curStepIndex === 4 && props.vars.curStepStatus == "complete");

    const dispatch = useDispatch();

    // Report
    function popupClick(e, close) {
        if (typeof e.target.className.includes === "function")
            if (e.target.className.includes("back")) {
            }
    };

    const deleteOrder = () => {
        dispatch(removeCurOrder(props.vars.id));
        setTimeout(function () {
            window.location = "/current-orders";
        }, 0)
    }

    return (
        <div className="m-10 flex flex-col bg-white rounded-xl">
            <h1 className="mt-10 ml-10 mr-10 text-center"> {propConst.orderDetailsTitle} </h1>
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
                    {!isPrevOrder && 
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
                    }
                </div>
            </div>

        </div>
    );

};

export default OrderDetails;