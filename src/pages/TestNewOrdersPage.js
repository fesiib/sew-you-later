import { useDispatch, useSelector } from 'react-redux';
import { addNewOrder, removeNewOrder } from '../reducers/NewOrdersList';
import { useState } from 'react';

const propConst = {
    header: "New Orders",
};

let propVars = {
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
    unseen: true,
    referenceImages: ["https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg", "https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"],
    id: 0,
};

function TestNewOrdersPage(props) {

    const [id, setId] = useState(0);

    const dispatch = useDispatch();

    const _addNewOrder = () => {
        propVars.id = id;
        setId(id + 1);
        dispatch(addNewOrder(propVars));
    };

    const _removeNewOrder = () => {
        if(id > 0) {
            dispatch(removeNewOrder(id - 1));
            setId(id - 1);
        }
    };

    return (
        <div>
            <div onClick={_addNewOrder}> +1 </div>
            <div onClick={_removeNewOrder}> -1 </div>
        </div>
    );

};

export default TestNewOrdersPage;