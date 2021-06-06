import ImageWithText from './ImageWithText';
import { ArrowCircleRightIcon, ExclamationCircleIcon } from '@heroicons/react/solid'

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { updateCurOrder } from '../reducers/curOrdersList';

const propConstUS = {
    nextStepTitle: "Next Step",
    finishDesc: `If this order is already completed, please click the button below so that we will
    move the order to "Previous Orders" tab.`,
    finishTitle: "Finish", 
};
const propConstTR = {
    nextStepTitle: "Sonraki Adım",
    finishDesc: `Bu sipariş tamamlandıysa, siparişi "Önceki Siparişler" sekmesine taşımamız için lütfen aşağıdaki düğmeyi tıklayın.`,
    finishTitle: "Tamamlandı", 
};

// const propVars = {
//     stepTitle: "Discussion",
//     stepDesc: "You will discuss stuff with the customer",
// };


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
            curStepDesc: "This order is already completed!",
            nextStepDesc:
                `You have already completed this order. You can browse throughout the order by using
                the left panel menu if you want to.`,
            nextStepPage: "order-reports",
        }
    }

    return (
        <div className="my-10 bg-white rounded-xl space-y-4">
            <div className="items-center justify-between mx-5">
                <div className="pt-4">
                    <p className="">{propConst.finishDesc}</p>
                </div>
                <div className="relative py-4 cursor-pointer">
                    <button onClick={() => updateTheOrder()} className="green w-full">
                        {propConst.finishTitle}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OrderFinish;