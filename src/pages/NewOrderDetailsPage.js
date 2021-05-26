import Navbar from '../components/Navbar'; 
import FAQButton from '../components/FAQButton';
import NewOrderDetails from '../components/NewOrderDetails';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';

function NewOrderDetailsPage(props) {

    const orderId = new URLSearchParams(window.location.search).get('orderId');
    const newOrdersList = useSelector(state => state.newOrdersList);  
    const newOrder = newOrdersList.find(order => (order.id == orderId));
    const [acceptedOrder, setAcceptedOrder] = useState("");

    if(newOrder) {
        return (
            <div>
                <Navbar className="top"/>
                <FAQButton />
                <div className="flex flex-row justify-center items-center">
                    <div className="flex-col w-3/5">
                        <NewOrderDetails vars={newOrder} setAcceptedOrder={setAcceptedOrder}/>
                    </div>
                </div>
            </div>
        );
    }
    if(acceptedOrder === "") {
        return <Redirect to={"/new-orders"}/>
    }
    return <Redirect to={"/order-details?orderId=" + acceptedOrder}/>;
    
};

export default NewOrderDetailsPage;