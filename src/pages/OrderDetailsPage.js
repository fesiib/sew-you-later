import Navbar from '../components/Navbar'; 
import ReportBrief from '../components/ReportBrief'; 
import ReportMessage from '../components/ReportMessage'; 
import ReportImages from '../components/ReportImages'; 
import Popup from 'reactjs-popup';
import OrderDetails from '../components/OrderDetails';
import OrderProgress from '../components/OrderProgress';
import OrderNextStep from '../components/OrderNextStep';
import Sidebar from '../components/Sidebar';
import {useSelector} from 'react-redux';

function OrderDetailsPage(props) {

    const orderId = new URLSearchParams(window.location.search).get('orderId');
    const curOrdersList = useSelector(state => state.curOrdersList);  
    const curOrder = curOrdersList.find(order => (order.id == orderId));

    return (
        <div>
            <Navbar className="top"/>
            <div className="absolute left-0">
                <Sidebar/>
            </div>
            <div className="ml-18 flex flex-row justify-center items-center">
                <div className="flex-col w-3/5">
                    <OrderProgress vars={curOrder}/>
                    <OrderDetails vars={curOrder}/>
                </div>
                <div className="self-start w-1/5">
                    <OrderNextStep vars={curOrder}/>
                </div>`
            </div>
        </div>
    );

};

export default OrderDetailsPage;