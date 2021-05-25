import Navbar from '../components/Navbar'; 
import Sidebar from '../components/Sidebar';
import MeasurementBody from '../components/MeasurementBody';
import MeasurementTags from '../components/MeasurementTags';
import MeasurementMessage from '../components/MeasurementMessage';
import MeasurementReceived from '../components/MeasurementReceived';
import { useDispatch, useSelector } from 'react-redux';
import { resendRq, sendRq } from '../reducers/measurements';

const propsConst = {
    send: "Send",
    resend: "Resend",
    orderTitle: "Order: "
}

function OrderMeasurementsPage(props) {
    const dispatch = useDispatch();
    
    const orderId = new URLSearchParams(window.location.search).get('orderId');
    const curOrdersList = useSelector(state => state.curOrdersList.orders);  
    const curOrder = curOrdersList.find(order => (order.id == orderId));
    const {
        status,
    } = useSelector(state => state.measurementsReducer);

    const _sendRq = () => {
        dispatch(sendRq());
    }

    const _resendRq = () => {
        dispatch(resendRq());
    }

    const onSend = () => {
        //show alert message
        if (status == 0) {
            _sendRq();
        }
        else if (status == 1) {
            _resendRq();
        }
        else if (status == 2) {
            _resendRq();
        }
        else if (status == 3) {
            _resendRq();
        }
    };
    return (
        <div className="">
            <Navbar className="absolute top-0"/>
            <div className="absolute left-0">
                <Sidebar/>
            </div>
            <div className="ml-20 flex flex-col">
                <div className="ml-32 mr-32 mt-10 flex flex-row justify-between">
                    <h1>{propsConst.orderTitle + curOrder.orderTitle} </h1>
                    <button onClick={onSend} className="h-16 w-32 flex-end right-0 bg-green-500 active:bg-green-700 cursor-pointer text-2xl">
                        {
                            (status==0) ? propsConst.send : propsConst.resend
                        }
                    </button>     
                </div>
                <div className="flex flex-row justify-center items-center">
                    <div className="w-2/5">
                        <MeasurementBody />
                    </div>
                    <div className="flex-col w-2/5">
                        <div className="w-1/2">
                            <MeasurementReceived/>
                        </div>
                        <MeasurementTags />
                        <MeasurementMessage />
                    </div>`
                </div>
            </div>
        </div>
    );
};

export default OrderMeasurementsPage;