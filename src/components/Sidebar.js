import { Disclosure } from '@headlessui/react'
import { useState, useEffect} from 'react';
import Notification from './Notification';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurOrder } from '../reducers/curOrdersList';

import "./Sidebar.css"

const propConst = {
    orderDetails: "Order Details",
    discussionNotes: "Discussion Notes",
    measurements: "Measurements",
    reports: "Reports",
};

function Sidebar(props) {

    const dispatch = useDispatch();

    const orderId = new URLSearchParams(window.location.search).get('orderId');
    const pathName = window.location.pathname;
    const curOrdersList = useSelector(state => state.curOrdersList);
    const curOrder = curOrdersList.find(order => (order.id == orderId));

    const curStep = curOrder.curStepIndex;

    const [orderDetailsNotification, setOrderDetailsNotification] = useState(false);
    const [measurementsNotification, setMeasurementsNotification] = useState(false);

    useEffect(() => {
        const updateNotificationPage = 
        (curOrder.notificationPage == propConst.orderDetails && pathName == "/order-details") ||
        (curOrder.notificationPage == propConst.measurements && pathName == "/order-measurements");
        if(updateNotificationPage) {
            dispatch(updateCurOrder({ ...curOrder, notificationPage: "X" }, orderId));
        }
        else if(!orderDetailsNotification && curOrder.notificationPage == propConst.orderDetails) {
            setOrderDetailsNotification(true);
        }
        else if(!measurementsNotification && curOrder.notificationPage == propConst.measurements) {
            setMeasurementsNotification(true);
        }
    }, []);

    const orderDetailsComponent =
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>;

    const measurementsComponent =
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
        </svg>;

    // if (!orderDetailsNotification && curOrder.notificationPage == propConst.orderDetails) {
    //     setOrderDetailsNotification(true);
    //     if (pathName == "/order-details") {
    //         dispatch(updateCurOrder({ ...curOrder, notificationPage: "X" }, orderId));
    //     }
    // }
    // if (!measurementsNotification && curOrder.notificationPage == propConst.measurements) {
    //     setMeasurementsNotification(true);
    //     if (pathName == "/order-measurements") {
    //         dispatch(updateCurOrder({ ...curOrder, notificationPage: "X" }, orderId));
    //     }
    // }

    function moveTo(href) {
        return () => {
            window.location = "/" + href + window.location.search;
        }
    }

    const checkDisabled = (moveToHref) => {
        switch (moveToHref) {
            case "order-details": {
                if (curStep >= 0) return "";
                else return "true";
            }
            case "discussion-notes": {
                if (curStep >= 1) return "";
                else return "true";
            }
            case "order-measurements": {
                if (curStep >= 2) return "";
                else return "true";
            }
            case "order-reports": {
                if (curStep >= 4) return "";
                else return "true";
            }
        }
    }

    const classOnDisabled = (moveToHref) => {
        if (checkDisabled(moveToHref) === "") return "bg-indigo-900 hover:bg-indigo-700 rounded-lg w-full h-14 justify-start space-x-2";
        else return "bg-indigo-900 text-indigo-700 rounded-lg w-full h-14 justify-start space-x-2"
    }

    return (
        <Disclosure className="bg-indigo-900">
            {({ open }) => (
                <>
                    <div id="sideBar" className="transform duration-300 fixed flex flex-wrap z-20 divide-y divide-indigo-400 px-2 py-2 mt-20 w-18 hover:w-56 content-center text-white inset-0 h-auto bg-indigo-900 shadow-2xl">
                        <div className="w-full py-1">
                            <button className={classOnDisabled('order-details')} onClick={moveTo('order-details')} disabled={checkDisabled('order-details')}>
                                <div>
                                    {
                                        orderDetailsNotification ?
                                            <Notification type="top-left" size="h-3 w-3">
                                                {orderDetailsComponent}
                                            </Notification> :
                                            orderDetailsComponent
                                    }
                                </div>
                                <p id="label">{propConst.orderDetails}</p>
                            </button>
                        </div>
                        <div className="w-full py-1">
                            <button className={classOnDisabled('discussion-notes')} onClick={moveTo('discussion-notes')} disabled={checkDisabled('discussion-notes')}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </div>
                                <p id="label">{propConst.discussionNotes}</p>
                            </button>
                        </div>
                        <div className="w-full py-1">
                            <button className={classOnDisabled('order-measurements')} onClick={moveTo('order-measurements')} disabled={checkDisabled('order-measurements')}>
                                <div>
                                    {
                                        measurementsNotification ?
                                            <Notification type="top-left" size="h-3 w-3">
                                                {measurementsComponent}
                                            </Notification> :
                                            measurementsComponent
                                    }
                                </div>
                                <p id="label">{propConst.measurements}</p>
                            </button>
                        </div>
                        <div className="w-full py-1">
                            <button className={classOnDisabled('order-reports')} onClick={moveTo('order-reports')} disabled={checkDisabled('order-reports')}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <p id="label">{propConst.reports}</p>
                            </button>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}

export default Sidebar