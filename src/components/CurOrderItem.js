import ImageWithText from './ImageWithText';
import ProgressBar from './ProgressBar';

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
    estimatedDue: "05/23/2021",
};

function CurOrderItem(props) {

    let notificationDiv;
    if(propVars.hasNotification) {
        notificationDiv = <div className="absolute h-9 w-9 rounded-full notification-red transform -translate-x-1/3 -translate-y-1/3"></div>;
    }
    return (
        <div className="inline-flex bg-white rounded-xl hover:bg-gray-300">
            {notificationDiv}
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
                        Estimated Due: {propVars.estimatedDue}
                    </div>
                </div>
            </a>
            <div className="m-4">
                <ImageWithText/>
            </div>
        </div>
    );

};

export default CurOrderItem;