import ImageWithText from './ImageWithText';
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import Notification from './Notification';

const propConst = {
    report: "Report",
};

function NewOrderItem(props) {
    return (
        <Notification size="h-6 w-6" position="top-left" data={props.vars.unseen}>
            <div className="inline-flex bg-white rounded-xl hover:bg-gray-300 pb-1">
                <a href="#">
                    <div className="ml-4 mb-4 mt-4 w-128 h-36 cursor-pointer">
                        <h1 className="mb-4 overflow-hidden overflow-ellipsis whitespace-nowrap">{props.vars.orderTitle}</h1>
                        <p className="line-clamp-4 text-black">
                            {props.vars.orderDesc}
                        </p>
                    </div>
                </a>
                <div className="mr-4 mb-4 mt-4 flex flex-col justify-between">
                    <div className=" w-56 text-right mt-1">
                        <h2 className="overflow-hidden overflow-ellipsis whitespace-nowrap">{props.vars.customerName}</h2>
                        <div className="">
                            <p>{props.vars.customerInfo}</p>
                            <p>{props.vars.customerLocation}</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button href="#" className="flex flex-row justify-end items-center red">
                            <ExclamationCircleIcon className="h-5"/>
                            <p class="ml-1">{propConst.report}</p>
                        </button>
                    </div>
                </div>
                <div className="m-4">
                    <ImageWithText vars={{referenceImage: props.vars.referenceImages[0], text: props.vars.referenceImages.length - 1}}/>
                </div>
            </div>
        </Notification>
    );
};

export default NewOrderItem;