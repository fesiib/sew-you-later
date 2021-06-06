import CurOrderItem from '../components/CurOrderItem';
import Navbar from '../components/Navbar';
import FAQButton from '../components/FAQButton';
import SortBy from '../components/SortBy';
import { useSelector } from 'react-redux';
import { useState } from 'react';

/// Simulation
import { propsConstTR, propsConstUS} from './TestNewOrdersPage';
import { useDispatch} from 'react-redux';
import { receiveRq } from '../reducers/measurements';
import { updateCurOrder } from '../reducers/curOrdersList';
const SIMULATION_DELAY = 1000;
// End of Simulation

const propConstUS = {
    header: "Current Orders",
    sortByOptions: ["Newest to Oldest", "A-Z", "Due Date", "Customer", "Location"],
    noCurrentOrders: "No Current Orders",
    underProduction: "Under production",
    nextStepDesc: `Any updates on the product? Click the arrow above to start sending progress report 
    to the customer.`,
};

const propConstTR = {
    header: "Mevcut Siparişler",
    sortByOptions: ["Yeniden Eskiye", "A-Z", "Teslim Tarihi", "Müşteri", "Konum"],
    noCurrentOrders: "Mevcut Sipariş Bulunmamaktadır",
    underProduction: "Üretim Altında",
    nextStepDesc: `Ürüne dair herhangi bir güncelleme var mı? Müşteriye ilerleme raporu göndermek için yukarıdaki oka tıklayın.`,
};

const propUtils = {
    getCmpArr: (v1, v2) => {
        return [v1 < v2, v1 == v2, v1 > v2];
    },
    decide: (cmpArr) => {
        for (let i = 0; i < 3; i++) {
            if (cmpArr[i]) {
                return i - 1;
            }
        }
    },
    sortBy: (v1, v2, order = 'Less') => {
        if (order == 'Greater') {
            [v1, v2] = [v2, v1];
        }
        const cmpArr = propUtils.getCmpArr(v1, v2);
        return propUtils.decide(cmpArr);
    },
    sortByCmps: [
        (firstEl, secondEl) => {
            return propUtils.sortBy(firstEl.id, secondEl.id, 'Greater');
        },
        (firstEl, secondEl) => {
            return propUtils.sortBy(firstEl.orderTitle, secondEl.orderTitle);
        },
        (firstEl, secondEl) => {
            return propUtils.sortBy(new Date(firstEl.estimatedDue), new Date(secondEl.estimatedDue));
        },
        (firstEl, secondEl) => {
            return propUtils.sortBy(firstEl.customerName, secondEl.customerName);
        },
        (firstEl, secondEl) => {
            return propUtils.sortBy(firstEl.customerLocation, secondEl.customerLocation);
        },
    ]
};

function CurrentOrderspage(props) {

    const language = useSelector(state => state.langReducer.language);
    const propConst = (language == "TUR" ? propConstTR : propConstUS);

    const curOrdersList = useSelector(state => state.curOrdersList.filter((val) => !(val.curStepIndex === 4 && val.curStepStatus == "complete")));   
    const [curOrdersOrganization, setCurOrdersOrganization] = useState(curOrdersList);

    /// Simulation
    const dispatch = useDispatch();

    const {
        id,
        status,
        requestedBodyParts
    } = useSelector(state => state.measurementsReducer);

    const orderId = id;
    const curOrder = curOrdersList.find(order => (order.id === parseInt(orderId)));

    // For progress bar
    const updateTheOrder = () => {
        dispatch(updateCurOrder(updateProgress(id), orderId));
    };

    const updateProgress = () => {
        let nextStepIndex = curOrder.curStepIndex + 1;
        if (status == 2) {
            nextStepIndex = curOrder.curStepIndex;
        }
        return {
            ...curOrder,
            curStepIndex: nextStepIndex,
            curStepStatus: "ongoing",
            curStepDesc: propConst.underProduction,
            nextStepDesc: propConst.nextStepDesc,
            nextStepPage: "order-reports",
            notificationPage: "Measurements",
        }
    }

    const _receiveMeasurements = () => {
        dispatch(receiveRq({
            unit: (language == "TUR" ? propsConstTR.measurements.unit : propsConstUS.measurements.unit),
            values: requestedBodyParts.map((value, index) => {
                return (language == "TUR" ? propsConstTR.measurements.values[value] : propsConstUS.measurements.values[value]);
            }),
        }));
        updateTheOrder();
        
    }
    /// End of Simulation

    const updateOrganization = (option) => {
        setTimeout(() => {
            if (status == 1 || status == 2) {
                _receiveMeasurements();
            }
        }, SIMULATION_DELAY);
        for (let i = 0; i < propConst.sortByOptions.length; i++) {
            if (option === propConst.sortByOptions[i]) {
                setCurOrdersOrganization([...curOrdersOrganization].sort(propUtils.sortByCmps[i]));
                break;
            }
        }
    };

    return (
        <div className="relative">
            <Navbar />
            <FAQButton />
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center ml-8 mr-12 my-6">
                    <h1>{propConst.header}</h1>
                    <SortBy options={propConst.sortByOptions} parentUpdate={updateOrganization} />
                </div>
                <div className="flex justify-center mb-2">
                    {
                        curOrdersOrganization.length > 0 
                        ?
                        <ul>
                            {curOrdersOrganization.map((val) => (
                                <div className="mb-6">
                                    <CurOrderItem vars={val} />
                                </div>
                            ))}
                        </ul>
                        :
                        <h3>{propConst.noCurrentOrders}</h3>
                    }
                </div>
            </div>
        </div>
    );
};

export default CurrentOrderspage;