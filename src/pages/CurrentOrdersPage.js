import CurOrderItem from '../components/CurOrderItem';
import Navbar from '../components/Navbar';
import SortBy from '../components/SortBy';

function CurrentOrderspage(props) {

    return (
        <div className="w-full">
            <Navbar/>
            <div className="flex justify-between items-center mx-10 my-4">
                <h1>Current Orders</h1>
                <SortBy options={["Received Date", "A-Z", "Due Date", "Customer", "Location"]}/>
            </div>
            <div className="flex justify-center">
                <ul>
                    <div className="m-4">
                        <CurOrderItem/>
                    </div>
                    <div className="m-4">
                        <CurOrderItem/>
                    </div>
                    <div className="m-4">
                        <CurOrderItem/>
                    </div>
                    <div className="m-4">
                        <CurOrderItem/>
                    </div>
                </ul>
            </div>
        </div>
    );

};

export default CurrentOrderspage;