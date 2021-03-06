import ImageWithText from './ImageWithText';
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import Notification from './Notification';
import { useDispatch, useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import ReportCard from './ReportCard';
import { removeNewOrder } from '../reducers/newOrdersList';

const propConstUS = {
    reportText: "Report",

    reportTitle: "Report this order?",
    reportBody: `Looks like this order is not appropriate. You can report this order back to the 
                 customer and delete this order from your list. To do that, please specify the 
                 reason below.`,
    reportDecline: "Decline",
    reportDelete: "Report & Delete",
};
const propConstTR = {
    reportText: "Bildir",

    reportTitle: "Kötüye kullanım bildir?",
    reportBody: `Görünüşe göre bu sipariş uygunsuz. Bu siparişi bildirebilir
    ve listenizden silebilirsiniz. Lütfen aşağıda nedenini belirtiniz.`,
    reportDecline: "Reddet",
    reportDelete: "Bildir ve Sil",
};

function NewOrderItem(props) {
    const language = useSelector(state => state.langReducer.language);
    const propConst = (language == "TUR" ? propConstTR : propConstUS);

    const newRefImages = useSelector(state => state.newRefImages);
    const referenceImages = newRefImages.filter((refImage) => refImage.parentId == props.vars.id);

    const moveTo = (href, params) => {
        window.location = "/" + href + "?" + new URLSearchParams(params);
    }

    const handleClick = (e) => {
        if(e.target.id == "report-button") {
            // Nothing   
        }
        else {
            moveTo('new-order-details', { orderId: props.vars.id })
        }
    };

    // Report
    const dispatch = useDispatch();

    function popupClick(e, close) {
        if (typeof e.target.className.includes === "function")
            if (e.target.className.includes("back")) {

            }
    };

    const deleteOrder = () => {
        dispatch(removeNewOrder(props.vars.id));
        setTimeout(function () {
            window.location.reload();
        }, 0)
    }

    return (
        <Notification size="h-6 w-6" position="top-left" data={props.vars.unseen}>
            <div className="inline-flex bg-white rounded-xl hover:bg-gray-300 pb-1 cursor-pointer" onClick={(e) => handleClick(e)}>
                <div>
                    <div className="ml-4 mb-4 mt-4 w-128 h-36">
                        <h1 className="mb-4 overflow-hidden overflow-ellipsis whitespace-nowrap">{props.vars.orderTitle}</h1>
                        <p className="line-clamp-4 text-black">
                            {props.vars.orderDesc}
                        </p>
                    </div>
                </div>
                <div className="mr-4 mb-4 mt-4 flex flex-col justify-between">
                    <div className=" w-56 text-right mt-1">
                        <h2 className="overflow-hidden overflow-ellipsis whitespace-nowrap">{props.vars.customerName}</h2>
                        <div className="">
                            <p>{props.vars.customerInfo}</p>
                            <p>{props.vars.customerLocation}</p>
                        </div>
                    </div>
                    <div id="report-button" className="flex justify-end">
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
                <div className="m-4">
                    <ImageWithText vars={{ referenceImage: referenceImages[0].src, text: referenceImages.length }} />
                </div>
            </div>
        </Notification>
    );
};

export default NewOrderItem;