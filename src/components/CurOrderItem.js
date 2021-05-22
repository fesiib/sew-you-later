import ImageWithText from './ImageWithText';
import ProgressBar from './ProgressBar';
import Notification from './Notification';

const propVars = {
    orderTitle: "T shirt with Pocket",
    customerName: "Mehmet Hamza Erol",
    customerInfo: "Male, 19",
    customerLocation: "Korea/Daejeon",
    hasNotification: true,
    estimatedDue: "05/23/2021",
};

function CurOrderItem(props) {

    return (
        <Notification position="top-left" size="h-9 w-9" data={propVars.hasNotification}>
            <div className="inline-flex bg-white rounded-xl hover:bg-gray-300">
                <a href="#" className="text-black ml-4 mt-4 mr-4">
                    <div className="flex flex-col cursor-pointer h-36">
                        <div className="inline-flex">
                            <h1 className="w-128 overflow-hidden overflow-ellipsis whitespace-nowrap">{propVars.orderTitle}</h1>
                            <div className="w-56 text-right">
                                <h2 className="overflow-hidden overflow-ellipsis whitespace-nowrap">{propVars.customerName}</h2>
                                <div className="">
                                    <p>{propVars.customerInfo}</p>
                                    <p>{propVars.customerLocation}</p>
                                </div>
                            </div>
                        </div>
                        <ProgressBar/>
                        <div className="text-right">
                            Estimated Due: {propVars.estimatedDue} {/* Make it date-time picker */}
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