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

    console.log(props.vars);
    return (
        <div className="m-10 flex flex-col bg-white rounded-xl">
            <div className="m-5">
                <h2 className="mb-4 ml-3">{propConst.statusTitle + props.vars.curStepDesc}</h2>
                <ProgressBar vars={props.vars}/>
            </div>
            <div className="mb-4 mr-6 -mt-4 flex justify-end">
                <a href="#" className="flex flex-row justify-end items-center font-bold text-green-500 cursor-default">
                    <CalendarIcon className="h-10 text-blue-h2"/>
                    <h2 className="text-base ml-2">{propConst.deadlineTitle + parseInt(((new Date(props.vars.estimatedDue).getTime() - new Date().getTime()) / (1000*60*60*24))) + " days left"}</h2>
                </a>
            </div>
        </div>
    );

};

export default OrderProgress;