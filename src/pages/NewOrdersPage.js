import NewOrderItem from '../components/NewOrderItem';
import Navbar from '../components/Navbar';
import SortBy from '../components/SortBy';
import { useSelector } from 'react-redux';

const propConst = {
    header: "New Orders",
};

function NewOrdersPage(props) {

    const newOrdersList = useSelector(state => state.newOrdersList.orders);    

    return (
        <div className="w-full">
            <Navbar/>
            <div className="flex justify-between items-center mx-10 my-4">
                <h1>{propConst.header}</h1>
                <SortBy options={["Received Date", "A-Z", "Due Date", "Customer", "Location"]}/>
            </div>
            <div className="flex justify-center">
                <ul>
                    {newOrdersList.map((val) => (
                        <div className="m-4">                        
                            <NewOrderItem vars={val}/>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );

};

export default NewOrdersPage;