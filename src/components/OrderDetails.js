import ImageWithText from './ImageWithText';
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import {useSelector} from 'react-redux';

const propConst = {
    refImagesTitle: "Reference Images",
    orderDescTitle: "Order Description",
    orderDetailsTitle: "Order Details",
    customerInfoTitle: "Customer Information",
    reportText: "Report"
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

    const curRefImages = useSelector(state => state.curRefImages);
    const referenceImages = curRefImages.filter((refImage) => refImage.parentId == props.vars.id);
    console.log(referenceImages);

    return (
        <div className="m-10 flex flex-col bg-white rounded-xl">
            <h1 className="mt-10 ml-10 mr-10 text-center"> {propConst.orderDetailsTitle} </h1>
            <div className="flex flex-row m-10">
                <div className="flex flex-col">
                    <div className="">
                        <h2 className="m-5"> {propConst.orderDescTitle} </h2>
                        <p className="text-black">
                            {props.vars.orderDesc}
                        </p>    
                    </div>
                    <div className="">
                        <h2 className="m-5"> {propConst.refImagesTitle} </h2>
                        <div className = "flex gap-5 flex-wrap">
                            {referenceImages.map((refImage) => (
                                <img className="w-36 h-36 thumbnail" src={refImage.src}/>
                            ))}
                            {/* <ImageWithText/>
                            <ImageWithText/>
                            <ImageWithText/>
                            <ImageWithText/>
                            <ImageWithText/>
                            <ImageWithText/>
                            <ImageWithText/>
                            <ImageWithText/> */}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="m-5 text-right">
                        <h2 className="whitespace-nowrap"> {propConst.customerInfoTitle} </h2>
                        <div className="">
                            <p className="whitespace-nowrap">{props.vars.customerName}</p>
                            <p>{props.vars.customerInfo}</p>
                            <p className="font-bold">{props.vars.customerLocation}</p>
                            <p>{props.vars.customerEmail}</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <a href="#" className="flex flex-row justify-end items-center font-bold text-gray-500">
                            <ExclamationCircleIcon className="h-5"/>
                            <p>{propConst.reportText}</p>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );

};

export default OrderDetails;