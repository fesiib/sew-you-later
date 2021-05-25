import { useDispatch, useSelector } from 'react-redux';
import { addNewOrder, removeNewOrder } from '../reducers/newOrdersList';
import { makeNewOrderAvId } from '../reducers/newOrdersId';
import { useEffect, useState } from 'react';
import { addNewRefImage } from '../reducers/newRefImages';

const propConst = {
    header: "New Orders",
};

const propVars = {
    orderTitle: "T-shirt with Pocket",
    orderDesc: `Hello! I want to order a T-Shirt. I have attached some images as references as
    I want it to look similar to the images. The collar and the arm part as shown in the images
    are just right! Can you finish it in two weeks?`,
    customerName: "Mehmet Hamza Erol",
    customerInfo: "Male, 19",
    customerLocation: "Korea/Daejeon",
    customerEmail: "beyaldiz@kaist.ac.kr",
    unseen: true,
};

const referenceImages = ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", "https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg", "https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"];

function TestNewOrdersPage(props) {

    const dispatch = useDispatch();
    const newOrdersId = useSelector(state => state.newOrdersId);
    
    const _addNewOrder = () => {
        dispatch(addNewOrder(propVars, newOrdersId.avId));
        referenceImages.forEach(src => dispatch(addNewRefImage(src, newOrdersId.avId)));
        dispatch(makeNewOrderAvId());
    };

    return (
        <div>
            <div onClick={_addNewOrder}> +1 </div>
            {/* <div onClick={_removeNewOrder}> -1 </div> */}
        </div>
    );

};

export default TestNewOrdersPage;