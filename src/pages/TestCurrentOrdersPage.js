import { useDispatch, useSelector } from 'react-redux';
import { addCurOrder, removeCurOrder, updateCurOrder } from '../reducers/curOrdersList';
import { useState } from 'react';
import { resetApp } from '../reducers';

const propVars = {
    orderTitle: "T-shirt with Pocket",
    orderDesc: `Hello! I want to order a T-Shirt. I have attached some images as references as
    I want it to look similar to the images. The collar and the arm part as shown in the images
    are just right! Can you finish it in two weeks?`,
    customerName: "Mehmet Hamza Erol",
    customerInfo: "Male, 19",
    customerLocation: "Korea/Daejeon",
    customerEmail: "beyaldiz@kaist.ac.kr",
    estimatedDue: "2021-05-29", // YYYY-MM-DD
    steps: "Order Confirmation-Discussion-Measurement Record-Customer's Response-Production-Delivery",
    curStepIndex: 2,
    curStepStatus: "ongoing", // It will be either "incomplete", "ongoing", "complete". Also, the previous steps are always assumed to be "complete"!
    nextStepDesc: "You will discuss stuff with the customer",
    curStepDesc: "Discussion",
    notificationPage: "order-details", // another possible options: "measurement...." (depending on) also "" if no notification
    curStepPage: "discussion-search", // will be equal to nextStepPage if incomplete, and before one step if ongoing
    nextStepPage: "discussion-search", 
};

const referenceImages = ["https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg", "https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg", "https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"];

function TestCurrentOrdersPage(props) {

    const dispatch = useDispatch();
    const curOrdersList = useSelector(state => state.curOrdersList);

    const _addCurOrder = () => {
        dispatch(addCurOrder(propVars));
    };

    const _removeCurOrder = () => {
        
    };

    const _updateCurOrder = () => {
        dispatch(updateCurOrder({...curOrdersList.find((order) => order.id == 0), notificationPage: "Measurements"}, 0));
    };

    const _resetApp = () => {
        dispatch(resetApp());
    }

    return (
        <div>
            <div onClick={_addCurOrder}> +1 </div>
            <div onClick={_removeCurOrder}> -1 </div>
            <div onClick={_updateCurOrder}>U</div>
            <div onClick={_resetApp}>Reset</div>
        </div>
    );

};

export default TestCurrentOrdersPage;