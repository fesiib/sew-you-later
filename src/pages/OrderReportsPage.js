import { useDispatch, useSelector } from 'react-redux';
import { addReport, sendDraftReport } from '../reducers/orderReports';
import { sendDraftImages } from '../reducers/reportImages';
import { sendDraftNotes } from '../reducers/imageNotes';
import Popup from 'reactjs-popup';


import Navbar from '../components/Navbar'; 
import ReportBrief from '../components/ReportBrief'; 
import Sidebar from '../components/Sidebar'; 
import ReportMessage from '../components/ReportMessage'; 
import ReportImages from '../components/ReportImages'; 
import FAQButton from '../components/FAQButton';

const popupStyle = {width: "100%", height: "100%", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", backgroundColor: "rgba(0,0,0,0.5)"}

function OrderReportsPage(props) {
    const orderId = parseInt(new URLSearchParams(window.location.search).get('orderId'));
    const reports = useSelector(state => state.orderReports);
    const dispatch = useDispatch();
    
    const renderedReports = reports.filter(report => (report.id !== -1 && report.orderId === orderId)).map(report => {
        return <ReportBrief key={report.id} id={report.id} orderId={orderId} report={report} />
    }).reverse();

    function popupClick(e, close) {
        if(typeof e.target.className.includes === "function")
            if(e.target.className.includes("back"))
                close();
    };

    function getAvailableId(reports) {
        let filtered = reports.filter(report => (report.id !== -1));
        if(filtered.length === 0)
            return 0;
        return filtered[filtered.length - 1].id + 1;
    }

    const _submitReport = () => {
        let availableId = getAvailableId(reports);
        let date = (new Date()).toLocaleString();
        dispatch(sendDraftReport(availableId, orderId, date));
        dispatch(sendDraftImages(availableId, orderId));
        dispatch(sendDraftNotes(availableId, orderId));
    }
    
    return (
        <div>
            <Navbar />
            <FAQButton />
            {/* <Sidebar /> */}
            <div className="m-8 mt-6 ml-28">
                <div className="flex mb-8">
                    <h1 className="text-black mr-1 my-auto">Order Reports</h1>
                    <Popup
                        trigger={
                            <button className="text-black p-0 rounded-full shadow-none my-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        }
                        modal
                        nested
                        position="center center"
                        contentStyle={popupStyle}
                    >
                        {close => (
                                <div onClick={(e) => popupClick(e, close)} className="w-full h-full back">
                                    <button onClick={close} className="float-right p-0 m-4 shadow-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    <div className="w-full absolute top-1/2 transform -translate-y-1/2 flex justify-evenly flex-wrap back">
                                        <div className="w-full absolute top-1/2 transform -translate-y-1/2 flex justify-evenly flex-wrap back">
                                            <ReportImages reportId={-1} orderId={orderId}/>
                                            <ReportMessage reportId={-1} orderId={orderId}/>
                                        </div>
                                    </div>
                                    <div className="fixed bottom-8 right-8">
                                        <button onClick={() => {_submitReport();close();}} className="green h-16">Send to the customer</button>
                                    </div>
                                </div>
                            )
                        }
                    </Popup>
                </div>
                {renderedReports.length > 0 &&
                    <div className="order-reports">
                        {renderedReports}
                    </div>
                }
                {renderedReports.length === 0 &&
                    <div className="w-full my-auto text-center">
                        <h1>There is no reports.</h1>
                        <div className="flex justify-center w-full mx-auto">
                            <h1>You can add a new report clicking the </h1>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h1> icon</h1>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default OrderReportsPage;