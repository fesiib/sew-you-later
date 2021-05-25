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
        <div className="my-10 grid grid-rows-2 grid-cols-3 place-content-evenly bg-white rounded-xl">
            <div className="m-5 row-span-1 col-span-2 row-start-1 flex flex-row items-center">
                <h1 className="">{propConst.nextStepTitle}</h1>
            </div>
            <div className="ml-5 row-span-1 col-span-1 cursor-pointer justify-end">
                <a href="#" className="text-green-500">
                    <ArrowCircleRightIcon className="h-16 mt-3"/>
                </a>
            </div>
            <div className="mx-5 pb-3 col-span-3 row-span-1 row-start-2">
                <h2 className="mb-1">{props.vars.steps.split('-')[props.vars.curStepIndex]}</h2>
                <p>{props.vars.nextStepDesc}</p>
            </div>
        </div>
    );

};

export default OrderNextStep;