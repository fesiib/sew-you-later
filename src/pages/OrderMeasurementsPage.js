import Navbar from '../components/Navbar'; 
import ReportBrief from '../components/ReportBrief'; 
import ReportMessage from '../components/ReportMessage'; 
import ReportImages from '../components/ReportImages'; 
import Popup from 'reactjs-popup';
import Sidebar from '../components/Sidebar';
import MeasurementBody from '../components/MeasurementBody';
import MeasurementTags from '../components/MeasurementTags';
import MeasurementMessage from '../components/MeasurementMessage';
import MeasurementReceived from '../components/MeasurementReceived';

const propVars = {
    numOfReports: 4,
};

function OrderMeasurementsPage(props) {
    return (
        <div className="">
            <Navbar className="absolute top-0"/>
            <div className="absolute left-0">
                <Sidebar/>
            </div>
            <div className="ml-18 flex flex-row justify-center items-center">
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
    );
};

export default OrderMeasurementsPage;