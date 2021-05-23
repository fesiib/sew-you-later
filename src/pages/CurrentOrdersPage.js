import CurOrderItem from '../components/CurOrderItem';
import Navbar from '../components/Navbar';
import SortBy from '../components/SortBy';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const propConst = {
    header: "Current Orders",
    sortByOptions: ["Newest to Oldest", "A-Z", "Due Date", "Customer", "Location"],
};

const propUtils = {
    getCmpArr: (v1, v2) => {
        return [v1 < v2, v1 == v2, v1 > v2];
    },
    decide: (cmpArr) => {
        for(let i = 0; i < 3; i++) {
            if(cmpArr[i]) {
                return i - 1;
            }
        }
    },
    sortBy: (v1, v2, order='Less') => {
        if(order == 'Greater') {
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
            let d1 = firstEl.estimatedDue.split('/');
            let d2 = secondEl.estimatedDue.split('/');
            return propUtils.sortBy(new Date(d1[2], d1[0], d1[1]), new Date(d2[2], d2[0], d2[1]));
        },
        (firstEl, secondEl) => {
            return propUtils.sortBy(firstEl.customerName, secondEl.customerName);
        },
        (firstEl, secondEl) => {
            return propUtils.sortBy(firstEl.customerLocation, secondEl.customerLocation);
        },
    ]
};

function CurrentOrderspage(props) {

    const curOrdersList = useSelector(state => state.curOrdersList.orders);   
    const [curOrdersOrganization, setCurOrdersOrganization] = useState(curOrdersList);

    const updateOrganization = (option) => {
        for(let i = 0; i < propConst.sortByOptions.length; i++) {
            if(option === propConst.sortByOptions[i]) {
                setCurOrdersOrganization([...curOrdersOrganization].sort(propUtils.sortByCmps[i]));
                break ;
            }
        }
    };

    return (
        <div className="w-full">
            <Navbar/>
            <div className="flex justify-between items-center mx-10 my-4">
                <h1>{propConst.header}</h1>
                <SortBy options={propConst.sortByOptions} parentUpdate={updateOrganization}/>
            </div>
            <div className="flex justify-center">
                <ul>
                    {curOrdersOrganization.map((val) => (
                        <div className="m-4">                        
                            <CurOrderItem vars={val}/>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );

};

export default CurrentOrderspage;