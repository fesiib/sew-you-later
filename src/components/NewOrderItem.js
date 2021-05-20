import ImageWithText from './ImageWithText';
import { ExclamationCircleIcon } from '@heroicons/react/solid'

const propVars = {
    orderTitle: "T shirt with Pocket",
    orderDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Phasellus condimentum commodo eros ac dapibus. 
    Mauris convallis turpis ac turpis dapibus, at malesuada quam molestie. 
    Mauris sed ex sagittis, dapibus mauris a, rhoncus felis. 
    Proin tempus enim ac tincidunt luctus. Suspendisse eu turpis vel erat vehicula scelerisque eget at nisi. 
    In odio lacus, laoreet vel rutrum eu, pharetra in quam. 
    Quisque non tincidunt mauris. `,
    customerName: "Mehmet Hamza Erol",
    customerInfo: "Male, 19",
    customerLocation: "Korea/Daejeon",
    hasNotification: true,
};

function NewOrderItem(props) {

    let notificationDiv;
    if(propVars.hasNotification) {
        notificationDiv = <div className="absolute h-9 w-9 rounded-full notification-red transform -translate-x-1/3 -translate-y-1/3"></div>;
    }
    return (
        <div className="inline-flex bg-white rounded-xl hover:bg-gray-300">
            {notificationDiv}
            <a href="#">
                <div className="ml-4 mb-4 mt-4 w-128 h-36 cursor-pointer">
                    <h1 className="mb-4 overflow-hidden overflow-ellipsis whitespace-nowrap">{propVars.orderTitle}</h1>
                    <p className="line-clamp-4 text-black">
                        {propVars.orderDesc}
                    </p>
                </div>
            </a>
            <div className="mr-4 mb-4 mt-4 flex flex-col justify-between">
                <div className=" w-56 text-right">
                    <h2 className="overflow-hidden overflow-ellipsis whitespace-nowrap">{propVars.customerName}</h2>
                    <div className="">
                        <p>{propVars.customerInfo}</p>
                        <p>{propVars.customerLocation}</p>
                    </div>
                </div>
                <div className="flex justify-end">
                    <a href="#" className="flex flex-row justify-end items-center font-bold text-gray-500">
                        <ExclamationCircleIcon className="h-5"/>
                        <p>Report</p>
                    </a>
                </div>
            </div>
            <div className="m-4">
                <ImageWithText/>
            </div>
        </div>
    );

};

export default NewOrderItem;