import { useDispatch, useSelector } from 'react-redux';
import { addNewOrder, removeNewOrder } from '../reducers/newOrdersList';
import { makeNewOrderAvId } from '../reducers/newOrdersId';
import { addNewRefImage } from '../reducers/newRefImages';
import { resetApp } from '../reducers';
import { receiveRq } from '../reducers/measurements';
import { updateCurOrder } from '../reducers/curOrdersList';
import { changeLanguage } from '../reducers/language';
import { useEffect } from 'react';

export const propsConstUS = {
    orderTitle: "T-shirt with Pocket",
    orderDesc: `Hello! I want to order a gray T-Shirt with a pocket. I have attached images as references. 
    The collar should be like in the first image. The color of the T-shirt can be  
    similar to the third picture but not sure about its tone yet. Can you finish it in two weeks?`,
    customerInfo: "Male, 19",
    curStepDesc: "Under production",
    nextStepDesc: `Any updates on the product? Click the arrow above to start sending progress report 
    to the customer.`,
    customerLocation: "Korea/Daejeon",
    reset: "Reset",
    goToNewOrders: "Go to New Orders",
    receiveMeasurements: "Receive Measurements",
    measurements: {
        unit: "cm",
        values: [
            -1,
            22.2,
            70.3,
            60.0,
            65,
            45.5,
            20.8,
            10.1,
            95.4,
            10,
            100.1,
            52,
            //propsConst.waistBackLabel,
            75,
            //propsConst.neckBackLabel,
            91,
            5,
            110.2,
            52,
            20.2,
            32.1,
        ],
    }
};

export const propsConstTR = {
    orderTitle: "Cepli Tişört",
    orderDesc: `Merhaba! Önünde cebi olan gri bir tişört sipariş vermek istiyorum. Referans olarak birkaç resim ekledim.
    Yakasını birinci resimdeki gibi istiyorum. Tişörtün rengi üçüncü resimdeki tişörtün rengine benzer olabilir fakat tonu konusunda hala
    emin değilim. Bu siparişi 3 hafta içerisinde tamamlamanız mümkün müdür?`,
    customerInfo: "Erkek, 19",
    curStepDesc: "Üretim altında",
    nextStepDesc: `Ürüne dair herhangi bir güncelleme var mı? Müşteriye ilerleme raporu göndermek için yukarıdaki oka tıklayın.`,
    customerLocation: "Kore/Daejeon",
    reset: "Yenile",
    goToNewOrders: "Yeni Siparişlere Git",
    receiveMeasurements: "Ölçüleri Gönder",
    measurements: {
        unit: "cm",
        values: [
            -1,
            22.2,
            70.3,
            60.0,
            65,
            45.5,
            20.8,
            10.1,
            95.4,
            10,
            100.1,
            52,
            //propsConst.waistBackLabel,
            75,
            //propsConst.neckBackLabel,
            91,
            5,
            110.2,
            52,
            20.2,
            32.1,
        ],
    }
};

export const propVarsUS = {
    orderTitle: propsConstUS.orderTitle,
    orderDesc: propsConstUS.orderDesc,
    customerName: "Mehmet Hamza Erol",
    customerInfo: propsConstUS.customerInfo,
    customerLocation: propsConstUS.customerLocation,
    customerEmail: "beyaldiz@kaist.ac.kr",
    unseen: true,
};

export const propVarsTR = {
    orderTitle: propsConstTR.orderTitle,
    orderDesc: propsConstTR.orderDesc,
    customerName: "Mehmet Hamza Erol",
    customerInfo: propsConstTR.customerInfo,
    customerLocation: propsConstTR.customerLocation,
    customerEmail: "beyaldiz@kaist.ac.kr",
    unseen: true,
};

export const referenceImages = [
    '/ref_images/1.png',
    '/ref_images/2.png',
    '/ref_images/3.png',
];

const BUTTON_STYLE = "m-10 flex-end right-0 -mr-4 green cursor-pointer";

function TestNewOrdersPage(props) {

    const language = useSelector(state => state.langReducer.language);
    const propsConst = (language == "TUR" ? propsConstTR : propsConstUS);
    const propVars = (language == "TUR" ? propVarsTR : propVarsUS);

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
            if (index < 3) {
                dispatch(addNewRefImage(src, newOrdersId.avId))
            }
        });
        dispatch(makeNewOrderAvId());
    };

    const _resetApp = () => {
        let prevLang = language;
        dispatch(resetApp());
        dispatch(changeLanguage(prevLang));
    }

    const _gotoNewOrder = () => {
        window.location = '/new-orders'
    }

    const {
        id,
        status,
        requestedBodyParts
    } = useSelector(state => state.measurementsReducer);

    const orderId = id;
    const curOrdersList = useSelector(state => state.curOrdersList);
    const curOrder = curOrdersList.find(order => (order.id === parseInt(orderId)));

    // For progress bar
    const updateTheOrder = () => {
        dispatch(updateCurOrder(updateProgress(id), orderId));
    };

    const updateProgress = () => {
        let nextStepIndex = curOrder.curStepIndex + 1;

        if (status == 2) {
            nextStepIndex = curOrder.curStepIndex;
        }

        return {
            ...curOrder,
            curStepIndex: nextStepIndex,
            curStepStatus: "ongoing",
            curStepDesc: propsConst.curStepDesc,
            nextStepDesc: propsConst.nextStepDesc,
            nextStepPage: "order-reports",
            notificationPage: "Measurements",
        }
    }

    const _receiveMeasurements = () => {
        if (status != 1 && status != 2) {
            alert("Order ID " + id + ": No measurements Request sent to the Customer");
            return;
        }
        dispatch(receiveRq({
            unit: propsConst.measurements.unit,
            values: requestedBodyParts.map((value, index) => {
                return propsConst.measurements.values[value];
            }),
        }));
        updateTheOrder();
    }

    return (
        <div>
            <button className={BUTTON_STYLE} onClick={_addNewOrder}> +1 </button>
            <button className={BUTTON_STYLE} onClick={_resetApp}>{propsConst.reset}</button>
            <button className={BUTTON_STYLE} onClick={_gotoNewOrder}>{propsConst.goToNewOrders}</button>
            <button className={BUTTON_STYLE} onClick={_receiveMeasurements}>{propsConst.receiveMeasurements}</button>
            {/* <div onClick={_removeNewOrder}> -1 </div> */}
        </div>
    );

};

export default TestNewOrdersPage;