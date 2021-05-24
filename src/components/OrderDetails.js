import ImageWithText from './ImageWithText';
import { ExclamationCircleIcon } from '@heroicons/react/solid'

const propConst = {
    refImagesTitle: "Reference Images",
    orderDescTitle: "Order Description",
    orderDetailsTitle: "Order Details",
    customerInfoTitle: "Customer Information",
};

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
    customerEmail: "beyaldiz@kaist.ac.kr",
};

function OrderDetails(props) {

    return (
        <div className="m-10 flex flex-col bg-white rounded-xl">
            <h1 className="mt-10 ml-10 mr-10 text-center"> {propConst.orderDetailsTitle} </h1>
            <div className="flex flex-row m-10">
                <div className="flex flex-col">
                    <div className="">
                        <h2 className="m-5"> {propConst.orderDescTitle} </h2>
                        <p className="text-black">
                            {propVars.orderDesc}
                        </p>    
                    </div>
                    <div className="">
                        <h2 className="m-5"> {propConst.refImagesTitle} </h2>
                        <div className = "flex gap-5 flex-wrap">
                            <ImageWithText/>
                            <ImageWithText/>
                            <ImageWithText/>
                            <ImageWithText/>
                            <ImageWithText/>
                            <ImageWithText/>
                            <ImageWithText/>
                            <ImageWithText/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="m-5 text-right">
                        <h2 className="whitespace-nowrap"> {propConst.customerInfoTitle} </h2>
                        <div className="">
                            <p className="whitespace-nowrap">{propVars.customerName}</p>
                            <p>{propVars.customerInfo}</p>
                            <p className="font-bold">{propVars.customerLocation}</p>
                            <p>{propVars.customerEmail}</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <a href="#" className="flex flex-row justify-end items-center font-bold text-gray-500">
                            <ExclamationCircleIcon className="h-5"/>
                            <p>Report</p>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );

};

export default OrderDetails;