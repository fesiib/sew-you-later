import { useState } from 'react';
import NewOrderItem from '../components/NewOrderItem';
import Navbar from '../components/Navbar';
import FAQButton from '../components/FAQButton';
import SortBy from '../components/SortBy';
import { useSelector } from 'react-redux';


/// Simulation
import {referenceImages, propVarsTR, propVarsUS} from './TestNewOrdersPage';
import { useDispatch} from 'react-redux';
import { addNewOrder } from '../reducers/newOrdersList';
import { makeNewOrderAvId } from '../reducers/newOrdersId';
import { addNewRefImage } from '../reducers/newRefImages';
import { receiveRq } from '../reducers/measurements';
import { updateCurOrder } from '../reducers/curOrdersList';
const SIMULATION_DELAY = 1000;
// End of Simulation

const propConstUS = {
    header: "New Orders",
    sortByOptions: ["Newest to Oldest", "A-Z", "Customer", "Location"],
    noNeworders: "No New Orders",
    underProduction: "Under production",
    nextStepDesc: `Any updates on the product? Click the arrow above to start sending progress report 
    to the customer.`,

};

const propConstTR = {
    header: "Yeni Siparişler",
    sortByOptions: ["Yeniden Eskiye", "A-Z", "Müşteri", "Konum"],
    noNeworders: "Yeni Sipariş Bulunmamaktadır",
    underProduction: "Üretim Altında",
    nextStepDesc: `Any updates on the product? Click the arrow above to start sending progress report 
    to the customer.`,

};

const propUtils = {
    getCmpArr: (v1, v2) => {
        return [v1 < v2, v1 === v2, v1 > v2];
    },
    decide: (cmpArr) => {
        for (let i = 0; i < 3; i++) {
            if (cmpArr[i]) {
                return i - 1;
            }
        }
    },
    sortBy: (v1, v2, order = 'Less') => {
        if (order === 'Greater') {
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
            return propUtils.sortBy(firstEl.customerName, secondEl.customerName);
        },
        (firstEl, secondEl) => {
            return propUtils.sortBy(firstEl.customerLocation, secondEl.customerLocation);
        },
    ]
};


function NewOrdersPage(props) {

    const language = useSelector(state => state.langReducer.language);
    const propConst = (language == "TUR" ? propConstTR : propConstUS);

    const newOrdersList = useSelector(state => state.newOrdersList);    
    const [newOrdersOrganization, setNewOrdersOrganization] = useState(newOrdersList);

    /// Simulation
    const dispatch = useDispatch();
    const newOrdersId = useSelector(state => state.newOrdersId);

    /* Randomize array in-place using Durstenfeld shuffle algorithm */
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    const _addNewOrder = () => {
        shuffleArray(referenceImages);
        if(language == "TUR")
            dispatch(addNewOrder(propVarsTR, newOrdersId.avId));
        else
            dispatch(addNewOrder(propVarsUS, newOrdersId.avId));
        referenceImages.forEach((src, index) => {
            if (index < 3) {
                dispatch(addNewRefImage(src, newOrdersId.avId))
            }
        });
        dispatch(makeNewOrderAvId());
    };

    const {
        id,
        status,
        requestedBodyParts
    } = useSelector(state => state.measurementsReducer);

    const orderId = id;
    const curOrdersList = useSelector(state => state.curOrdersList);
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

    // const _receiveMeasurements = () => {
    //     dispatch(receiveRq({
    //         unit: propsConst.measurements.unit,
    //         values: requestedBodyParts.map((value, index) => {
    //             return propsConst.measurements.values[value];
    //         }),
    //     }));
    //     updateTheOrder();
    // }

    /// End of Simulation

    const updateOrganization = (option) => {
        setTimeout(() => {
            if (newOrdersList.length == 0) {
                _addNewOrder();
            }
        }, SIMULATION_DELAY);
        for (let i = 0; i < propConst.sortByOptions.length; i++) {
            if (option === propConst.sortByOptions[i]) {
                setNewOrdersOrganization([...newOrdersOrganization].sort(propUtils.sortByCmps[i]));
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
                        newOrdersOrganization.length > 0
                        ?
                        <ul>
                            {newOrdersOrganization.map((val) => (
                                <div className="mb-6">
                                    <NewOrderItem vars={val} />
                                </div>
                            ))}
                        </ul>
                        :
                        <h3>{propConst.noNeworders}</h3>
                    }
                </div>
            </div>
        </div>
    );

};

export default NewOrdersPage;