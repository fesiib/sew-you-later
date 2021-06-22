import ImageWithText from './ImageWithText';
import { ArrowCircleRightIcon, ExclamationCircleIcon } from '@heroicons/react/solid'

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { updateCurOrder } from '../reducers/curOrdersList';
import Popup from 'reactjs-popup';
import ConfirmCard from './ConfirmCard';

const propConstUS = {
    nextStepTitle: "Next Step",
    finishDesc: `If this order is already completed, please click the button below so that we will
    move the order to "Previous Orders" tab.`,
    finishTitle: "Finish",
    curStepDesc: "This order is already completed!",
    nextStepDesc: `You have already completed this order. You can browse throughout the order by using
    the left panel menu if you want to.`,

    popUpTitle: "Finish the Order?",
    popUpBody: "By clicking this, the order will be moved to \"Complete Order\" tab and it cannot be undone.",
    popUpDecline: "Cancel", 
    popUpConfirm: "Finish", 
};
const propConstTR = {
    nextStepTitle: "Sonraki Adım",
    finishDesc: `Bu sipariş tamamlandıysa, siparişi "Önceki Siparişler" sekmesine taşımamız için lütfen aşağıdaki düğmeyi tıklayın.`,
    finishTitle: "Tamamlandı",
    curStepDesc: "Bu sipariş çoktan tamamlandı.",
    nextStepDesc: `Siparişi çoktan tamamladınız. Dilerseniz soldaki menüden siparişin tamamına göz atabilirsiniz.`,

    popUpTitle: "",
    popUpBody: "",
    popUpDecline: "", 
    popUpConfirm: "", 
};

const popupStyle = {width: "100%", height: "100%", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", backgroundColor: "rgba(0,0,0,0.5)"}

function OrderFinish(props) {
    const language = useSelector(state => state.langReducer.language);
    const propConst = (language == "TUR" ? propConstTR : propConstUS);

    const orderId = props.orderId;
    const curOrdersList = useSelector(state => state.curOrdersList);
    const curOrder = curOrdersList.find(order => (order.id == orderId));

    const dispatch = useDispatch();

    const updateTheOrder = () => {
        // const curPage = curOrder.nextStepPage
        dispatch(updateCurOrder(updateProgress(), curOrder.id));
    };

    const updateProgress = () => {
        // const curStepPage = props.vars.nextStepPage;
        return {
            ...curOrder,
            curStepIndex: curOrder.curStepIndex,
            curStepStatus: "complete",
            curStepDesc: propConst.curStepDesc,
            nextStepDesc: propConst.nextStepDesc,
            nextStepPage: "order-reports",
        }
    }
    
    function popupClick(e, close) {
        if(typeof e.target.className.includes === "function")
            if(e.target.className.includes("back")) {
                close();
            }
    };

    return (
        <div className="my-10 bg-white rounded-xl space-y-4">
            <div className="items-center justify-between mx-5">
                <div className="pt-4">
                    <p className="">{propConst.finishDesc}</p>
                </div>
                <div className="relative py-4 cursor-pointer">

                    <div>
                        <Popup
                            trigger={
                                <button className="green w-full">
                                    {propConst.finishTitle}
                                </button>
                            }
                            modal
                            nested
                            position="center center"
                            contentStyle={popupStyle}
                        >
                            {close => (
                                <div onClick={(e) => popupClick(e, close)} className="w-full h-full back">
                                    <ConfirmCard
                                        onConfirm={() => updateTheOrder()}
                                        onDecline={close}
                                        title={propConst.popUpTitle}
                                        body={propConst.popUpBody}
                                        decline={propConst.popUpDecline}
                                        confirm={propConst.popUpConfirm}
                                    />
                                </div>
                            )
                            }
                        </Popup>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderFinish;