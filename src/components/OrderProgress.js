import ImageWithText from './ImageWithText';
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { CalendarIcon } from '@heroicons/react/outline';

const propConst = {
    refImagesTitle: "Reference Images",
    orderDescTitle: "Order Description",
    orderDetailsTitle: "Order Details",
    statusTitle: "Status: ",
    deadlineTitle: "Due: ",
};

const propVars = {
    orderTitle: "T shirt with Pocket",
    orderDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Phasellus condimentum commodo eros ac dapibus. 
    Mauris convallis turpis ac turpis dapibus, at malesuada quam molestie. 
    Mauris sed ex sagittis, dapibus mauris a, rhoncus felis. 
    Proin tempus enim ac tincidunt luctus. Suspendisse eu turpis vel erat vehicula scelerisque eget at nisi. 
    In odio lacus, laoreet vel rutrum eu, pharetra in quam. 
    Quisque non tincidunt mauris. `,
    orderStatus: "Discussion",
    orderDeadline: "10 days left",
    customerName: "Mehmet Hamza Erol",
    customerInfo: "Male, 19",
    customerLocation: "Korea/Daejeon",
    customerEmail: "beyaldiz@kaist.ac.kr",
};

function OrderProgress(props) {

    return (
        <div className="m-10 flex flex-col bg-white rounded-xl">
            <div className="m-5">
                <h2 className="">{propConst.statusTitle + propVars.orderStatus}</h2>
                {/* <ProgressBar></ProgressBar> */}
            </div>
            <div className="m-5 flex justify-end">
                <a href="#" className="flex flex-row justify-end items-center font-bold text-green-500">
                    <CalendarIcon className="h-10"/>
                    <p>{propConst.deadlineTitle + propVars.orderDeadline}</p>
                </a>
            </div>
        </div>
    );

};

export default OrderProgress;