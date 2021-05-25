import { useDispatch, useSelector } from 'react-redux';
import { addCurOrder, removeCurOrder, updateCurOrder } from '../reducers/CurrentOrdersList';
import { useState } from 'react';

const propVars = {
    orderTitle: "T shirt with Pocket",
    customerName: "Mehmet Hamza Erol",
    customerInfo: "Male, 19",
    customerLocation: "Korea/Daejeon",
    customerEmail: "beyaldiz@kaist.ac.kr",
    referenceImages: ["https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg", "https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg", "https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"],
    progressInfo: {    
        estimatedDue: "2021-05-29", // YYYY-MM-DD
        steps: ["Order Confirmation", "Customer's Response", "Discussion", "Measurement Record", "Production", "Delivery"],
        curStep: {
            stepIndex: 2,
            stepStatus: "ongoing", // It will be either "incomplete", "ongoing", "complete". Also, the previous steps are always assumed to be "complete"!
            nextStepDesc: "You will discuss stuff with the customer",
            curStepDesc: "Discussion",
        },
    },
    notificationInfo: {
        hasNotification: true,
        notificationPage: "order-details", // another possible options: "measurement...." (depending on)
    },
    id: 0,
};

function TestCurrentOrdersPage(props) {

    const [id, setId] = useState(0);

    const dispatch = useDispatch();

    const _addCurOrder = () => {
        propVars.id = id;
        setId(id + 1);
        dispatch(addCurOrder(propVars));
    };

    const _removeCurOrder = () => {
        if(id > 0) {
            dispatch(removeCurOrder(id - 1));
            setId(id - 1);
        }
    };

    const _updateCurOrder = () => {
        dispatch(updateCurOrder(id - 1, {
            ...propVars, 
            progressInfo: {
                ...propVars.progressInfo, 
                orderConfirmation: {
                    ...propVars.progressInfo.orderConfirmation,
                    status: "complete",
                },
            },
        },));
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