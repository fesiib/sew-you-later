import ImageWithText from './ImageWithText';
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { CalendarIcon } from '@heroicons/react/outline';

import ProgressBar from './ProgressBar';

const propConst = {
    statusTitle: "Status: ",
    deadlineTitle: "Due: ",
};

// const propVars = {
//     orderStatus: "Discussion",
//     orderDeadline: "10 days left",
// };

function OrderProgress(props) {

    return (
        <div className="m-10 flex flex-col bg-white rounded-xl">
            <div className="m-5">
                <h2 className="">{propConst.statusTitle + props.vars.curStep.curStepDesc}</h2>
                <ProgressBar vars={props.vars}/>
            </div>
            <div className="m-5 flex justify-end">
                <a href="#" className="flex flex-row justify-end items-center font-bold text-green-500">
                    <CalendarIcon className="h-10"/>
                    <p>{propConst.deadlineTitle + parseInt(((new Date(props.vars.estimatedDue).getTime() - new Date().getTime()) / (1000*60*60*24))) + " days left"}</p>
                </a>
            </div>
        </div>
    );

};

export default OrderProgress;