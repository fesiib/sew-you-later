import ImageWithText from './ImageWithText';
import ProgressBar from './ProgressBar';
import Notification from './Notification';
import EstimatedDue from './EstimatedDue';
import { CalendarIcon } from '@heroicons/react/outline';
import {useSelector} from 'react-redux';

const propConstUS = {
    estimatedDue: "Estimated Due:",
    imagePlaceholderLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/488px-No-Image-Placeholder.svg.png",
};
const propConstTR = {
    estimatedDue: "Kalan gün:",
    imagePlaceholderLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/488px-No-Image-Placeholder.svg.png",
};


function CurOrderItem(props) {
    const language = useSelector(state => state.langReducer.language);
    const propConst = (language == "TUR" ? propConstTR : propConstUS);

    const curRefImages = useSelector(state => state.curRefImages);
    const referenceImages = curRefImages.filter((refImage) => refImage.parentId === props.vars.id);

    const moveTo = (href, params) => {
        window.location = "/" + href + "?" + new URLSearchParams(params);
    }

    const handleClick = (e) => {
        if(e.target.id == "calendar-icon") {
            // TODO
        }
        else {
            moveTo('order-details', { orderId: props.vars.id });
        }
    }

    return (
        <Notification position="top-left" size="h-6 w-6" data={props.vars.notificationPage}>
            <div className="inline-flex bg-white rounded-xl hover:bg-gray-300 cursor-pointer" onClick={(e) => handleClick(e)}>
                <div className="text-black ml-4 mt-4 mr-4">
                    <div className="flex flex-col h-44">
                        <div>
                            <div className="inline-flex">
                                <h1 className="w-128 overflow-hidden overflow-ellipsis whitespace-nowrap">{props.vars.orderTitle}</h1>
                                <div className="w-56 text-right mt-1">
                                    <h2 className="overflow-hidden overflow-ellipsis whitespace-nowrap">{props.vars.customerName}</h2>
                                    <div className="">
                                        <p>{props.vars.customerInfo}</p>
                                        <p>{props.vars.customerLocation}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mr-2">
                                <ProgressBar vars={props.vars} />
                            </div>
                        </div>
                        <div className="text-right mt-2">
                            <div id="calender-icon" className="flex flex-row justify-end items-center">
                                <div className="transform scale-90">
                                    <EstimatedDue vars={props.vars}/>
                                </div>
                            </div>                           
                        </div>
                    </div>
                </div>
                <div className="m-4 flex items-center">
                    {
                        referenceImages[0] === undefined
                        ?
                        <ImageWithText vars={{referenceImage: propConst.imagePlaceholderLink, text: 0}}/>
                        :
                        <ImageWithText vars={{referenceImage: referenceImages[0].src, text: referenceImages.length}}/>
                    }
                </div>
            </div>
        </Notification>
    );

};

export default CurOrderItem;