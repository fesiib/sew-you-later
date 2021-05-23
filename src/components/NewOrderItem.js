import ImageWithText from './ImageWithText';
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import Notification from './Notification';

const propConst = {
    report: "Report",
};

function NewOrderItem(props) {

    return (
        <Notification size="h-9 w-9" position="top-left" data={props.vars.unseen}>
            <div className="inline-flex bg-white rounded-xl hover:bg-gray-300">
                <a href="#">
                    <div className="ml-4 mb-4 mt-4 w-128 h-36 cursor-pointer">
                        <h1 className="mb-4 overflow-hidden overflow-ellipsis whitespace-nowrap">{props.vars.orderTitle}</h1>
                        <p className="line-clamp-4 text-black">
                            {props.vars.orderDesc}
                        </p>
                    </div>
                </a>
                <div className="mr-4 mb-4 mt-4 flex flex-col justify-between">
                    <div className=" w-56 text-right">
                        <h2 className="overflow-hidden overflow-ellipsis whitespace-nowrap">{props.vars.customerName}</h2>
                        <div className="">
                            <p>{props.vars.customerInfo}</p>
                            <p>{props.vars.customerLocation}</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <a href="#" className="flex flex-row justify-end items-center font-bold text-gray-500">
                            <ExclamationCircleIcon className="h-5"/>
                            <p>{propConst.report}</p>
                        </a>
                    </div>
                </div>
                <div className="m-4">
                    <ImageWithText vars={{referenceImages: props.vars.referenceImages}}/>
                </div>
            </div>
        </Notification>
    );

};

export default NewOrderItem;