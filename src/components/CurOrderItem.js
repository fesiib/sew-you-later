import ImageWithText from './ImageWithText';
import ProgressBar from './ProgressBar';
import Notification from './Notification';
import { CalendarIcon } from '@heroicons/react/outline';

const propConst = {
    estimatedDue: "Estimated Due:",
};


function CurOrderItem(props) {

    const moveTo = (href, params) => {
        return () => {
            window.location = "/" + href + "?" + new URLSearchParams(params);
        }
    }

    return (
        <Notification position="top-left" size="h-6 w-6" data={props.vars.hasNotification}>
            <div className="inline-flex bg-white rounded-xl hover:bg-gray-300">
                <div className="text-black ml-4 mt-4 mr-4">
                    <div className="flex flex-col h-36">
                        <div className="cursor-pointer" onClick={moveTo('order-details', { orderId: props.vars.id })}>
                            <div className="inline-flex">
                                <h1 className="w-128 overflow-hidden overflow-ellipsis whitespace-nowrap">{props.vars.orderTitle}</h1>
                                <div className="w-56 text-right mt-1">
                                    <h2 className="overflow-hidden overflow-ellipsis whitespace-nowrap">{props.vars.customerName}</h2>
                                    <div className="">
                                        <p>{props.vars.customerInfo}</p>
                                        <p>{props.vars.customerLocation}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mr-2">
                                <ProgressBar vars={props.vars.progressInfo} />
                            </div>
                        </div>
                        <div className="text-right -mt-2">
                            <a href="#" className="flex flex-row justify-end items-center text-green-500 hover:text-green-800">
                                <CalendarIcon className="h-6" />
                                <p className="text-sm">{propConst.estimatedDue + parseInt(((new Date(props.vars.progressInfo.estimatedDue).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))) + " days left"}</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="m-4">
                    <ImageWithText vars={{ referenceImage: props.vars.referenceImages[0], text: props.vars.referenceImages.length - 1 }} />
                </div>
            </div>
        </Notification>
    );

};

export default CurOrderItem;