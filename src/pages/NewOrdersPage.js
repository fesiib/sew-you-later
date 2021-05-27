import { useState } from 'react';
import NewOrderItem from '../components/NewOrderItem';
import Navbar from '../components/Navbar';
import FAQButton from '../components/FAQButton';
import SortBy from '../components/SortBy';
import { useSelector } from 'react-redux';

const propConst = {
    header: "New Orders",
    sortByOptions: ["Newest to Oldest", "A-Z", "Customer", "Location"],
    noNeworders: "No New Orders",
};


const propUtils = {
    getCmpArr: (v1, v2) => {
        return [v1 < v2, v1 === v2, v1 > v2];
    },
    decide: (cmpArr) => {
        for (let i = 0; i < 3; i++) {
            if (cmpArr[i]) {
                return i - 1;
            }
        }
    },
    sortBy: (v1, v2, order = 'Less') => {
        if (order === 'Greater') {
            [v1, v2] = [v2, v1];
        }
        const cmpArr = propUtils.getCmpArr(v1, v2);
        return propUtils.decide(cmpArr);
    },
    sortByCmps: [
        (firstEl, secondEl) => {
            return propUtils.sortBy(firstEl.id, secondEl.id, 'Greater');
        },
        (firstEl, secondEl) => {
            return propUtils.sortBy(firstEl.orderTitle, secondEl.orderTitle);
        },
        (firstEl, secondEl) => {
            return propUtils.sortBy(firstEl.customerName, secondEl.customerName);
        },
        (firstEl, secondEl) => {
            return propUtils.sortBy(firstEl.customerLocation, secondEl.customerLocation);
        },
    ]
};


function NewOrdersPage(props) {

    const newOrdersList = useSelector(state => state.newOrdersList);    
    const [newOrdersOrganization, setNewOrdersOrganization] = useState(newOrdersList);

    const updateOrganization = (option) => {
        for (let i = 0; i < propConst.sortByOptions.length; i++) {
            if (option === propConst.sortByOptions[i]) {
                setNewOrdersOrganization([...newOrdersOrganization].sort(propUtils.sortByCmps[i]));
                break;
            }
        }
    };

    return (
        <div className="relative">
            <Navbar />
            <FAQButton />
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center ml-8 mr-12 my-6">
                    <h1>{propConst.header}</h1>
                    <SortBy options={propConst.sortByOptions} parentUpdate={updateOrganization} />
                </div>
                <div className="flex justify-center mb-2">
                    {
                        newOrdersOrganization.length > 0
                        ?
                        <ul>
                            {newOrdersOrganization.map((val) => (
                                <div className="mb-6">
                                    <NewOrderItem vars={val} />
                                </div>
                            ))}
                        </ul>
                        :
                        <h3>{propConst.noNeworders}</h3>
                    }
                </div>
            </div>
        </div>
    );

};

export default NewOrdersPage;