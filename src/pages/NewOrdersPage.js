import NewOrderItem from '../components/NewOrderItem';
import Navbar from '../components/Navbar';
import SortBy from '../components/SortBy';

function CurrentOrderspage(props) {

    return (
        <div className="w-full">
            <Navbar/>
            <div className="flex justify-between items-center mx-10 my-4">
                <h1>New Orders</h1>
                <SortBy options={["Received Date", "A-Z", "Due Date", "Customer", "Location"]}/>
            </div>
            <div className="flex justify-center">
                <ul>
                    <div className="m-4">
                        <NewOrderItem/>
                    </div>
                    <div className="m-4">
                        <NewOrderItem/>
                    </div>
                    <div className="m-4">
                        <NewOrderItem/>
                    </div>
                    <div className="m-4">
                        <NewOrderItem/>
                    </div>
                </ul>
            </div>
        </div>
    );

};

export default CurrentOrderspage;