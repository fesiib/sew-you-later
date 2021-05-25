import ImageWithText from './ImageWithText';
import { ArrowCircleRightIcon, ExclamationCircleIcon } from '@heroicons/react/solid'

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { updateCurOrder } from '../reducers/curOrdersList';

const propConst = {
    nextStepTitle: "Next Step",
};

// const propVars = {
//     stepTitle: "Discussion",
//     stepDesc: "You will discuss stuff with the customer",
// };


function OrderNextStep(props) {
    const orderId = new URLSearchParams(window.location.search).get('orderId');
   
    const dispatch = useDispatch();

    const updateTheOrder = () => {
        dispatch(updateCurOrder(updateProgress(), props.vars.id));
    };

    const updateProgress = () => {
        const curStepPage = props.vars.nextStepPage;
        const curStatus = props.vars.curStepStatus;
        const descArray = {
            "discussion-search": {
                "incomplete": [
                    "Having a discussion with the customer",
                    "You have to complete notes taking with the customer so that you can proceed to the measurements part.",
                ],
                "complete": [
                    "About to create a measurements form",
                    "You will create a measurements form that will be sent to the customer by choosing the body parts that you need the measurements.",
                ],
            },
            "order-measurements": {
                "incomplete": [
                    "Waiting for the customer's response for the measurements",
                    "You will get the customer's measurements after the customer fills in the form. If you have not sent the form yet, please do so by clicking the arrow above!",
                ],
                "complete": [
                    "Under production",
                    "You can send your first progress report to the customer so they can see the updates. Click the arrow when you are ready!",
                ]
            },
            "order-reports": {
                "incomplete": [
                    "Under production",
                    "Any updates? Click the arrow above to start sending progress report to the customer.",
                ]
            },
        }
        if (curStatus === "ongoing") {
            return props.vars
        }
        else {
            return {
                ...props.vars,
                curStepStatus: "ongoing",
                curStepDesc: descArray[curStepPage][curStatus][0],
                nextStepDesc: descArray[curStepPage][curStatus][1],
            }
        }
    }

    return (
        <div className="my-10 grid grid-rows-2 grid-cols-3 place-content-evenly bg-white rounded-xl">
            <div className="m-5 row-span-1 col-span-2 row-start-1 flex flex-row items-center">
                <h1 className="">{propConst.nextStepTitle}</h1>
            </div>
            <div className="ml-5 row-span-1 col-span-1 cursor-pointer justify-end">
                <a onClick={() => updateTheOrder()} href={"/" + props.vars.nextStepPage + "?orderId=" + orderId} className="text-green-500">
                    <ArrowCircleRightIcon className="h-16 mt-3" />
                </a>
            </div>
            <div className="mx-5 pb-3 col-span-3 row-span-1 row-start-2">
                <h2 className="mb-1">{props.vars.steps.split('-')[props.vars.curStepIndex]}</h2>
                <p>{props.vars.nextStepDesc}</p>
            </div>
        </div>
    );
}

export default OrderNextStep;