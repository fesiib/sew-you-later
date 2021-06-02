import { useDispatch, useSelector } from 'react-redux';
import { addImage } from '../reducers/reportImages';
import { storage } from '../services/firebase';

import Popup from 'reactjs-popup';
import ImageNotes from './ImageNotes';

const propVars = {
    reportTitle: "Please type a report title.",
    reportBody: "Dear Customer, I completed the production of the arms and the pockets. You can check the attached images. Also ... Dear Customer, I completed the production of the arms and the pockets. You can check the attached images.",
    imgLinks: [
        "https://v1.tailwindcss.com/img/card-top.jpg"
    ]
};

const popupStyle = {width: "100%", height: "100%", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", backgroundColor: "rgba(0,0,0,0.5)"}

function ReportImages({reportId, orderId}) {
    const images = useSelector(state => state.reportImages.filter((image) => (image.parentReportId === reportId && image.orderId === orderId)));
    const dispatch = useDispatch();

    function popupClick(e, close) {
        if(typeof e.target.className.includes === "function")
            if(e.target.className.includes("back"))
                close();
    };

    const renderedImages = images.map(image => {
        return <Popup
                    key={image.id} 
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
                                <div className="w-full absolute top-1/2 transform -translate-y-1/2 flex justify-evenly flex-wrap back">
                                    <ImageNotes imageId={image.id} imageSrc={image.src} reportId={reportId} orderId={orderId} closePopup={close}/>
                                </div>
                            </div>
                        )
                    }
                </Popup>
    });

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function uploadImageAsPromise (imageFile) {
        return new Promise(function (resolve, reject) {
            var storageRef = storage.ref(`report_images/${imageFile.name}`);
            var task = storageRef.put(imageFile);

            task.on('state_changed',
                function progress(snapshot){

                },
                function error(err){
    
                },
                function complete(){
                    task.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        dispatch(addImage(downloadURL, reportId, orderId));
                    });
                }
            );
        });
    }

    const uploadImage = e => {
        for(var i = 0; i < e.target.files.length; i++) {
            var image = e.target.files[i];
            uploadImageAsPromise(image);
        }
    }

    return (
        <div className="card max-w-3xl p-5 flex-grow">
            <h2 className="text-black">Images</h2>
            {(images.length === 0 && reportId !== -1) ?
                <h2 className="text-gray-400 text-center">There is no image</h2> 
                : 
                
                <div className="gallery-small">
                    <input type="file" onChange={uploadImage} id="upload-button" accept="image/*" multiple hidden/>
                    {reportId === -1 ?
                        <label htmlFor="upload-button" className="h-36 w-36 cursor-pointer flex flex-col justify-center thumbnail border border-dashed mx-4 mt-5 p-0">
                            <h2 className="text-gray-400 mx-auto">Upload image</h2>
                            <div className="mx-auto text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>
                            </div>
                        </label>
                        :
                        ""
                    }
                    {renderedImages}
                </div>
            }
        </div>
    );
};

export default ReportImages;