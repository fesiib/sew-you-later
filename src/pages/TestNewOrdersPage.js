import { useDispatch, useSelector } from 'react-redux';
import { addNewOrder, removeNewOrder } from '../reducers/newOrdersList';
import { makeNewOrderAvId } from '../reducers/newOrdersId';
import { useEffect, useState } from 'react';
import { addNewRefImage } from '../reducers/newRefImages';
import { resetApp } from '../reducers';

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

const referenceImages = [
            '/ref_images/1.png', 
            '/ref_images/2.png', 
            '/ref_images/3.png', 
            '/ref_images/4.png', 
            '/ref_images/5.png', 
            '/ref_images/6.png', 
            '/ref_images/7.png', 
            '/ref_images/8.png', 
            '/ref_images/9.png'
];

function TestNewOrdersPage(props) {

    const dispatch = useDispatch();
    const newOrdersId = useSelector(state => state.newOrdersId);
    
    /* Randomize array in-place using Durstenfeld shuffle algorithm */
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    
    const _addNewOrder = () => {
        shuffleArray(referenceImages);
        dispatch(addNewOrder(propVars, newOrdersId.avId));
        referenceImages.forEach((src, index) => {
            if(index < 4) {
                dispatch(addNewRefImage(src, newOrdersId.avId))
            }
        });
        dispatch(makeNewOrderAvId());
    };

    const _resetApp = () => {
        dispatch(resetApp());
    }

    return (
        <div>
            <div onClick={_addNewOrder}> +1 </div>
            <div onClick={_resetApp}>Reset</div>
            {/* <div onClick={_removeNewOrder}> -1 </div> */}
        </div>
    );

};

export default TestNewOrdersPage;