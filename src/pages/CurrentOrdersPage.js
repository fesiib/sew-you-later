
import CurOrderItem from '../components/CurOrderItem';
import Navbar from '../components/Navbar';
import SortBy from '../components/SortBy';

const propConst = {
    header: "Current Orders",
};

const propVars = {
    orderTitle: "T shirt with Pocket",
    customerName: "Mehmet Hamza Erol",
    customerInfo: "Male, 19",
    customerLocation: "Korea/Daejeon",
    hasNotification: false,
    estimatedDue: "05/23/2021",
};

function CurrentOrderspage(props) {

    return (
        <div className="w-full">
            <Navbar/>
            <div className="flex justify-between items-center mx-10 my-4">
                <h1>{propConst.header}</h1>
                <SortBy options={["Received Date", "A-Z", "Due Date", "Customer", "Location"]}/>
            </div>
            <div className="flex justify-center">
                <ul>
                    <div className="m-4">
                        <CurOrderItem vars={propVars}/>
                    </div>
                    <div className="m-4">
                        <CurOrderItem vars={propVars}/>
                    </div>
                    <div className="m-4">
                        <CurOrderItem vars={propVars}/>
                    </div>
                    <div className="m-4">
                        <CurOrderItem vars={propVars}/>
                    </div>
                </ul>
            </div>
        </div>
    );

};

export default CurrentOrderspage;