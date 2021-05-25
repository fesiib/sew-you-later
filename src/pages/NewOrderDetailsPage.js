import Navbar from '../components/Navbar'; 
import NewOrderDetails from '../components/NewOrderDetails';
import {useSelector} from 'react-redux';

// const propVars = {
//     numOfReports: 4,
// };

function OrderDetailsPage(props) {

    const orderId = new URLSearchParams(window.location.search).get('orderId');
    const newOrdersList = useSelector(state => state.newOrdersList.orders);  
    const newOrder = newOrdersList.find(order => (order.id == orderId));

    return (
        <div>
            <Navbar className="top"/>
            <div className="ml-18 flex flex-row justify-center items-center">
                <div className="flex-col w-3/5">
                    <NewOrderDetails vars={newOrder}/>
                </div>
            </div>
        </div>
    );

};

export default OrderDetailsPage;