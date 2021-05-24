import { useDispatch, useSelector } from 'react-redux';
import { addCurOrder, removeCurOrder, updateCurOrder } from '../reducers/CurrentOrdersList';
import { useState } from 'react';

const propVars = {
    orderTitle: "Z shirt with Pocket",
    customerName: "Mehmet Hamza Erol",
    customerInfo: "Male, 19",
    customerLocation: "Korea/Daejeon",
    hasNotification: true,
    estimatedDue: "05/23/2021",
    referenceImages: ["https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg", "https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg", "https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"],
    progressInfo: {
        orderConfirmation: {
            str: "Order Confirmation",
            status: "incomplete",
        },
        customerResponse: {
            str: "Customer's Response",
            status: "incomplete",
        },
        discussion: {
            str: "Discussion",
            status: "incomplete",
        },
        measurementRecord: {
            str: "Measurement Record",
            status: "incomplete",
        },
        production: {
            str: "Production",
            status: "incomplete",
        },
        delivery: {
            str: "Delivery",
            status: "incomplete",
        },
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