import ImageWithText from './ImageWithText';
import { ArrowCircleRightIcon, ExclamationCircleIcon } from '@heroicons/react/solid'

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { updateCurOrder } from '../reducers/curOrdersList';

const propConst = {
    nextStepTitle: "Next Step",

    curStepDesc1: "About to create a measurements form",
    nextStepDesc1: `You will create a measurements form that will be sent to the customer by choosing 
    the body parts that you need the measurements. Feel free to add any additional
    notes to the discussion page anytime by clicking "Discussion Notes" on the left panel.`,

    curStepDesc4: "Under production",
    nextStepDesc4: `Any updates on the product? Click the arrow above to start sending progress report 
    to the customer.`
};

function OrderNextStep(props) {
    const orderId = new URLSearchParams(window.location.search).get('orderId');

    const dispatch = useDispatch();

    const updateTheOrder = () => {
        const curPage = props.vars.nextStepPage
        dispatch(updateCurOrder(updateProgress(), props.vars.id));
        window.location = "/" + curPage + "?orderId=" + orderId;
    };

    const updateProgress = () => {
        const curStep = props.vars.curStepIndex;
        const descArray = {
            // Discussion -> Measurement Record
            // Measurement Record -> Customer's Response
            1: [
                propConst.curStepDesc1,
                propConst.nextStepDesc1,
                curStep + 1,
                "order-measurements"
            ],
            // 2 shouldn't have any effect since it is toggled by measurement page's Send button
            2: [
                props.vars.curStepDesc,
                props.vars.nextStepDesc,
                curStep,
                "order-measurements"
            ],
            // Waiting measurements from the customer
            3: [
                props.vars.curStepDesc,
                props.vars.nextStepDesc,
                curStep,
                "order-measurements"
            ],
            // This one should be integrated with the automatic measurements fill-in.
            // Not supposed to be here
            // Customer's Response -> Production
            4: [
                propConst.curStepDesc4,
                propConst.nextStepDesc4,
                curStep,
                "order-reports"
            ],
        }

        return {
            ...props.vars,
            curStepStatus: "ongoing",
            curStepDesc: descArray[curStep][0],
            nextStepDesc: descArray[curStep][1],
            curStepIndex: descArray[curStep][2],
            nextStepPage: descArray[curStep][3],
        }
    }

    return (
        <div className="my-10 bg-white rounded-xl space-y-4">
            <div className="flex items-center justify-between mx-5">
                <div className="flex">
                    <h1 className="">{propConst.nextStepTitle}</h1>
                </div>
                <div className="flex cursor-pointer">
                    <a onClick={() => updateTheOrder()} className="text-green-500 hover:text-green-600">
                        <ArrowCircleRightIcon className="h-16 mt-3" />
                    </a>
                </div>
            </div>
            <div className="mx-5 pb-3">
                <h2 className="mb-1">{props.vars.steps.split('-')[props.vars.curStepIndex]}</h2>
                <p>{props.vars.nextStepDesc}</p>
            </div>
        </div>
    );
}

export default OrderNextStep;