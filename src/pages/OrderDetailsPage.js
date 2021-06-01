import Navbar from '../components/Navbar'; 
import FAQButton from '../components/FAQButton';
import ReportBrief from '../components/ReportBrief'; 
import ReportMessage from '../components/ReportMessage'; 
import ReportImages from '../components/ReportImages'; 
import Popup from 'reactjs-popup';
import OrderDetails from '../components/OrderDetails';
import OrderProgress from '../components/OrderProgress';
import OrderNextStep from '../components/OrderNextStep';
import MeasurementReceived from '../components/MeasurementReceived';
import Sidebar from '../components/Sidebar';
import {useDispatch, useSelector} from 'react-redux';
import { setId } from '../reducers/measurements';
import OrderFinish from '../components/OrderFinish';

function OrderDetailsPage(props) {
    const dispatch = useDispatch();
    
    const orderId = new URLSearchParams(window.location.search).get('orderId');
    const curOrdersList = useSelector(state => state.curOrdersList);  
    const curOrder = curOrdersList.find(order => (order.id == orderId));

    const {
        id,
    } = useSelector(state => state.measurementsReducer);

    if (orderId != id) {
        dispatch(setId(orderId));
    }

    function ShowFinish() {
        if (curOrder.curStepIndex === 4) {
            return <OrderFinish orderId={orderId}/>;
        }
        else return <div></div>;
    }

    return (
        <div>
            <Navbar className="top"/>
            <FAQButton />
            <div className="absolute left-0">
                <Sidebar/>
            </div>
            <div className="ml-18 flex flex-row justify-center items-center">
                <div className="flex-col w-3/5">
                    <OrderProgress vars={curOrder}/>
                    <OrderDetails vars={curOrder}/>
                </div>
                <div className="self-start w-1/4">
                    <OrderNextStep vars={curOrder}/>
                    <MeasurementReceived vars={"orderDetails"}/>
                    <ShowFinish />
                </div>
            </div>
        </div>
    );

};

export default OrderDetailsPage;