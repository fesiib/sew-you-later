import ImageWithText from './ImageWithText';
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { CalendarIcon } from '@heroicons/react/outline';

const propConst = {
    statusTitle: "Status: ",
    deadlineTitle: "Due: ",
};

const propVars = {
    orderStatus: "Discussion",
    orderDeadline: "10 days left",
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