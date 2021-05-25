import ImageWithText from './ImageWithText';
import { ArrowCircleRightIcon, ExclamationCircleIcon } from '@heroicons/react/solid'
import { ArrowRightIcon, CalendarIcon } from '@heroicons/react/outline';

const propConst = {
    nextStepTitle: "Next Step",
};

// const propVars = {
//     stepTitle: "Discussion",
//     stepDesc: "You will discuss stuff with the customer",
// };

function OrderNextStep(props) {

    return (
        <div className="m-10 grid grid-rows-2 grid-cols-3 place-content-evenly bg-white rounded-xl">
            <div className="m-5 row-span-1 col-span-2 row-start-1 flex flex-row items-center">
                <h1 className="">{propConst.nextStepTitle}</h1>
            </div>
            <div className="m-5 row-span-1 col-span-1 cursor-pointer">
                <a href="#" className="text-green-500">
                    <ArrowCircleRightIcon className="h-20"/>
                </a>
            </div>
            <div className="m-5 col-span-3 row-span-1 row-start-2">
                <h2 className="">{props.vars.steps[props.vars.curStep.stepIndex]}</h2>
                <p>{props.vars.curStep.nextStepDesc}</p>
            </div>
        </div>
    );

};

export default OrderNextStep;