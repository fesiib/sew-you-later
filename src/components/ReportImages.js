import { useDispatch, useSelector } from 'react-redux';
import { addImage } from '../reducers/reportImages';

import PopupWidget from '../components/PopupWidget'; 
import Popup from 'reactjs-popup';
import ImageNotes from './ImageNotes';
import { interpolate } from 'chroma-js';

const propVars = {
    reportTitle: "Please type a report title.",
    reportBody: "Dear Customer, I completed the production of the arms and the pockets. You can check the attached images. Also ... Dear Customer, I completed the production of the arms and the pockets. You can check the attached images.",
    imgLinks: [
        "https://v1.tailwindcss.com/img/card-top.jpg"
    ]
};

const popupStyle = {width: "100%", height: "100%", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", backgroundColor: "rgba(0,0,0,0.5)"}

function ReportImages({reportId}) {
    const report = useSelector(state => state.orderReports.find((report) => report.id === reportId));
    const images = useSelector(state => state.reportImages.filter((image) => image.parentReportId === reportId));
    const dispatch = useDispatch();

    function popupClick(e, close) {
        if(typeof e.target.className.includes === "function")
            if(e.target.className.includes("back"))
                close();
    };

    const renderedImages = images.map(image => {
        return <Popup
                    trigger={
                        <img className="thumbnail mx-4 mt-5 cursor-pointer" src={image.src}/>
                    }
                    modal
                    nested
                    position="center center"
                    contentStyle={{width: "100%", height: "100%", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", backgroundColor: "rgba(0,0,0,0.5)"}}
                >
                    {close => (
                            <div onClick={(e) => popupClick(e, close)} className="w-full h-full back">
                                <button onClick={close} className="float-right p-0 m-4 shadow-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <div className="w-full absolute top-1/2 transform -translate-y-1/2 flex justify-evenly flex-wrap back">
                                    <ImageNotes imageId={image.id} imageSrc={image.src}/>
                                </div>
                            </div>
                        )
                    }
                </Popup>
    });

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function uploadImage() {
        var src = "/report_images/" + (getRandomInt(8) + 1).toString() + ".png";
        dispatch(addImage(src, reportId));
    }

    return (
        <div className="card max-w-3xl p-5 flex-grow">
            <h2 className="text-black">Images</h2>
            <div className="gallery-small">
                <button onClick={uploadImage} className="flex flex-col justify-center thumbnail border border-dashed mx-4 mt-5 p-0">
                    <h2 className="text-gray-400 mx-auto">Upload image</h2>
                    <div className="mx-auto text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                    </div>
                </button>
                {renderedImages}
            </div>
        </div>
    );
};

export default ReportImages;