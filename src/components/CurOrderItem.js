import ImageWithText from './ImageWithText';
import ProgressBar from './ProgressBar';
import Notification from './Notification';

const propConst = {
    estimatedDue: "Estimated Due:",
};


function CurOrderItem(props) {

    return (
        <Notification position="top-left" size="h-9 w-9" data={props.vars.hasNotification}>
            <div className="inline-flex bg-white rounded-xl hover:bg-gray-300">
                <a href="#" className="text-black ml-4 mt-4 mr-4">
                    <div className="flex flex-col cursor-pointer h-36">
                        <div className="inline-flex">
                            <h1 className="w-128 overflow-hidden overflow-ellipsis whitespace-nowrap">{props.vars.orderTitle}</h1>
                            <div className="w-56 text-right">
                                <h2 className="overflow-hidden overflow-ellipsis whitespace-nowrap">{props.vars.customerName}</h2>
                                <div className="">
                                    <p>{props.vars.customerInfo}</p>
                                    <p>{props.vars.customerLocation}</p>
                                </div>
                            </div>
                        </div>
                        <ProgressBar/>
                        <div className="text-right">
                            {propConst.estimatedDue} {props.vars.estimatedDue} {/* Make it date-time picker */}
                        </div>
                    </div>
                </a>
                <div className="m-4">
                    <ImageWithText/>
                </div>
            </div>
        </Notification>
    );

};

export default CurOrderItem;