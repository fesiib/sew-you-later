import { CalendarIcon } from '@heroicons/react/outline';
import {useSelector} from 'react-redux';

const propConstUS = {
    deadlineTitle: "Estimated Due: ",
    notAvailable: "N/A",
};

const propConstTR = {
    deadlineTitle: "Kalan Gün: ",
    notAvailable: "N/A",
};

function EstimatedDue(props) {
    const language = useSelector(state => state.langReducer.language);
    const propConst = (language == "TUR" ? propConstTR : propConstUS);
  
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
        <div href="#" className="flex flex-row justify-end items-center font-bold cursor-default mt-2">
            <CalendarIcon className={"h-8" + getCalendarColor()}/>
            <h2 className={"text-base ml-2" + getCalendarColor()}>{propConst.deadlineTitle + getEstimatedDueText()}</h2>
        </div>
    );
}

export default EstimatedDue;