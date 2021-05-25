import { useDispatch, useSelector } from 'react-redux';
import { addCurOrder, removeCurOrder, updateCurOrder } from '../reducers/curOrdersList';
import { useState } from 'react';

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
    estimatedDue: "2021-05-29", // YYYY-MM-DD
    steps: "Order Confirmation-Customer's Response-Discussion-Measurement Record-Production-Delivery",
    curStepIndex: 2,
    curStepStatus: "ongoing", // It will be either "incomplete", "ongoing", "complete". Also, the previous steps are always assumed to be "complete"!
    nextStepDesc: "You will discuss stuff with the customer",
    curStepDesc: "Discussion",
    notificationPage: "order-details", // another possible options: "measurement...." (depending on) also "" if no notification
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
        dispatch(updateCurOrder({...curOrdersList.find((order) => order.id == 0), estimatedDue: "2021-09-07"}, 0));
    };

    return (
        <div>
            <div onClick={_addCurOrder}> +1 </div>
            <div onClick={_removeCurOrder}> -1 </div>
            <div onClick={_updateCurOrder}>U</div>
        </div>
    );

};

export default TestCurrentOrdersPage;