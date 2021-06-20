import ImageWithText from './ImageWithText';
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { CalendarIcon } from '@heroicons/react/outline';
import {useSelector} from 'react-redux';
import ProgressBar from './ProgressBar';

const propConstUS = {
    statusTitle: "Status: ",
    deadlineTitle: "Estimated Due: ",
    notAvailable: "N/A",
};

const propConstTR = {
    statusTitle: "Durum: ",
    deadlineTitle: "Kalan Gün: ",
    notAvailable: "N/A",
};

// const propVars = {
//     orderStatus: "Discussion",
//     orderDeadline: "10 days left",
// };

function OrderProgress(props) {
    const language = useSelector(state => state.langReducer.language);
    const propConst = (language == "TUR" ? propConstTR : propConstUS);
  
    // console.log(props.vars);
    const isPrevOrder = (props.vars.curStepIndex === 4 && props.vars.curStepStatus == "complete");
    
    const getEstimatedDue = () => {
        if (isPrevOrder) {
            return 100;
        }
        return parseInt(((new Date(props.vars.estimatedDue).getTime() - new Date().getTime()) / (1000*60*60*24)));
    }

    const getEstimatedDueText = () => {
        if(isPrevOrder)
            return propConst.notAvailable;
        return getEstimatedDue() + (language == "TUR"? " gün kaldı" : " days left");
    };

    const getCalendarColor = () => {
        console.log(getEstimatedDue());
        if (getEstimatedDue() < 8) {
            return " text-red-500 ";
        }
        return " text-blue-h2 ";
    }

    return (
        <div className="m-10 flex flex-col bg-white rounded-xl">
            <div className="m-5">
                <h2 className="mb-4 ml-3">{propConst.statusTitle + props.vars.curStepDesc}</h2>
                <ProgressBar vars={props.vars}/>
            </div>
            <div className="mb-4 mr-6 -mt-4 flex justify-end">
                <div href="#" className="flex flex-row justify-end items-center font-bold cursor-default mt-2">
                    <CalendarIcon className={"h-10" + getCalendarColor()}/>
                    <h2 className={"text-base ml-2" + getCalendarColor()}>{propConst.deadlineTitle + getEstimatedDueText()}</h2>
                </div>
            </div>
        </div>
    );

};

export default OrderProgress;