import { useDispatch, useSelector } from 'react-redux';
import { addNewOrder, removeNewOrder } from '../reducers/newOrdersList';
import { makeNewOrderAvId } from '../reducers/newOrdersId';
import { useEffect, useState } from 'react';
import { addNewRefImage } from '../reducers/newRefImages';
import { resetApp } from '../reducers';
import { receiveRq } from '../reducers/measurements';
import { updateCurOrder } from '../reducers/curOrdersList';

const propConst = {
    header: "New Orders",
};

const propVars = {
    orderTitle: "T-shirt with Pocket",
    orderDesc: `Hello! I want to order a T-Shirt. I have attached some images as references as
    I want it to look similar to the images. The collar and the arm part as shown in the images
    are just right! Can you finish it in two weeks?`,
    customerName: "Mehmet Hamza Erol",
    customerInfo: "Male, 19",
    customerLocation: "Korea/Daejeon",
    customerEmail: "beyaldiz@kaist.ac.kr",
    unseen: true,
};

const referenceImages = [
    '/ref_images/1.png',
    '/ref_images/2.png',
    '/ref_images/3.png',
];

const BUTTON_STYLE = "m-10 flex-end right-0 -mr-4 green cursor-pointer";

function TestNewOrdersPage(props) {

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
        dispatch(addNewOrder(propVars, newOrdersId.avId));
        referenceImages.forEach((src, index) => {
            if (index < 3) {
                dispatch(addNewRefImage(src, newOrdersId.avId))
            }
        });
        dispatch(makeNewOrderAvId());
    };

    const _resetApp = () => {
        dispatch(resetApp());
    }

    const _gotoNewOrder = () => {
        window.location = '/new-orders'
    }

    const orderId = 0;
    const curOrdersList = useSelector(state => state.curOrdersList);
    const curOrder = curOrdersList.find(order => (order.id == orderId));

    // For progress bar
    const updateTheOrder = () => {
        dispatch(updateCurOrder(updateProgress(), orderId));
    };

    const updateProgress = () => {
        const nextStepIndex = curOrder.curStepIndex + 1;

        return {
            ...curOrder,
            curStepIndex: nextStepIndex,
            curStepStatus: "ongoing",
            curStepDesc: "Under production",
            nextStepDesc:
                `Any updates on the product? Click the arrow above to start sending progress report 
                to the customer.`,
            nextStepPage: "order-reports"
        }
    }

    const _receiveMeasurements = () => {
        console.log("receiving");
        dispatch(receiveRq([22, 66, 60, 80, 25, 70]));
        updateTheOrder();
    }

    return (
        <div>
            <button className={BUTTON_STYLE} onClick={_addNewOrder}> +1 </button>
            <button className={BUTTON_STYLE} onClick={_resetApp}>Reset</button>
            <button className={BUTTON_STYLE} onClick={_gotoNewOrder}>Go to New Orders</button>
            <button className={BUTTON_STYLE} onClick={_receiveMeasurements}> Receive Measurements</button>
            {/* <div onClick={_removeNewOrder}> -1 </div> */}
        </div>
    );

};

export default TestNewOrdersPage;