import Notification from '../components/Notification';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import FAQButton from '../components/FAQButton';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import NotesDiscussionImage from '../components/NotesDiscussionImage';
import Popup from 'reactjs-popup';
import { useEffect, useState } from 'react';
import {addImage, deleteImage} from '../reducers/discussionImages';

const propConstUS = {
    viewNotesHeader: "View Notes",
    searchImagesButtonText: "Search Images",
};

const propConstTR = {
    viewNotesHeader: "Notları Görüntüle",
    searchImagesButtonText: "Resimleri Ara",
};

function DiscussionNotesPage(props) {

    const language = useSelector(state => state.langReducer.language);
    const propConst = (language == "TUR" ? propConstTR : propConstUS);

    const dispatch = useDispatch();
    
    const orderId = new URLSearchParams(window.location.search).get('orderId');
    const allDiscussionImages = useSelector(state => state.discussionImages);
    const curDiscussionImages = allDiscussionImages.filter(img => img.parentId == orderId);

    const [popUpState, setPopUpState] = useState({
        imgSrc: "",
        status: "",
    });

    useEffect(() => {
        if(popUpState.status == "ADD") {
            if(curDiscussionImages.find(img => img.src == popUpState.imgSrc) == undefined) {
                //console.log("Add, defined");
                dispatch(addImage(popUpState.imgSrc, orderId));
                setPopUpState({
                    imgSrc: popUpState.imgSrc,
                    status: "NOTE",
                });
            }
            else {                
                //console.log("Add, undefined");
            }
        }
        else if(popUpState.status == "DEL") {
            if(curDiscussionImages.find(img => img.src == popUpState.imgSrc) != undefined) {
                //console.log("Del, defined");
                //console.log(popUpState.imgSrc);
                dispatch(deleteImage(popUpState.imgSrc, orderId));
                setPopUpState({
                    imgSrc: popUpState.imgSrc,
                    status: "",
                });
            }
            else {                
                //console.log("Del, undef");
            }
        }
        else if(popUpState.status == "DEL-CLOSE") {
            dispatch(deleteImage(popUpState.imgSrc, orderId));
            setPopUpState({
                imgSrc: "",
                status: "",
            });
        }
    }, [popUpState]);

    function moveTo(href) {
        return () => {
            window.location = "/" + href + window.location.search;
        }
    }

    function popupClick(e, close) {
        if(typeof e.target.className.includes === "function")
            if(e.target.className.includes("back")) {
                setPopUpState({
                    imgSrc: "",
                    status: "",
                })
                //    close();
            }
    };

    const getImageId = (img, isImgObj=true) => {
        if(isImgObj) {
            const res = curDiscussionImages.find(image => image.src == img.src); 
            if(res != undefined) 
                return res.id; 
            return undefined;
        }
        else {
            const res = curDiscussionImages.find(image => image.src == img); 
            if(res != undefined) 
                return res.id; 
            return undefined;
        }
    };

    const viewTheImage = (imgSrc) => {
        console.log(imgSrc);
        setPopUpState({
            imgSrc: imgSrc,
            status: "", 
        });
    };

    return (
        <div className="h-screen w-screen">
            <Navbar />
            <FAQButton />
            <Sidebar />
            <div className="flex justify-between items-center ml-20 mt-8 mr-8">
                <h3 className="font-bold mx-8">{propConst.viewNotesHeader}</h3>
                <div className="flex justify-end">
                    <button className="bg-indigo-900 h-10" onClick={moveTo('discussion-search')}>{propConst.searchImagesButtonText}</button>
                </div>
            </div>
            <div className="ml-20">
                <div className="p-4 m-4 gallery-large">

                {
                    curDiscussionImages.map((img, index) => (

                        <div>                            
                            <Notification type="check" position="top-right">
                                <img className="thumbnail border-4 border-green-400 cursor-pointer" src={img.src} onClick={() => viewTheImage(img.src)}/>
                            </Notification>
                            <Popup
                                key={index} 
                                open={popUpState.imgSrc == img.src}
                                modal
                                nested
                                position="center center"
                                contentStyle={{width: "100%", height: "100%", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", backgroundColor: "rgba(0,0,0,0.5)"}}
                            >
                                {close => (
                                        <div onClick={(e) => popupClick(e, close)} className="w-full h-full back">
                                            <div className="float-left flex p-3">
                                                <h3 className="text-white mx-1">Progress saved</h3>
                                                <div className="relative">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white fixed h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                                    </svg>
                                                    <div className="bg-black rounded-full absolute left-3 top-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="w-full absolute top-1/2 transform -translate-y-1/2 flex justify-evenly flex-wrap back">
                                                <NotesDiscussionImage imageId={img.id} imageSrc={img.src} closePopup={close} orderId={orderId} setPopUpState={setPopUpState} status={popUpState.status}/>
                                            </div>
                                        </div>
                                    )
                                }
                            </Popup>
                        </div>
    
                    ))
                    }
                    {
                        popUpState.imgSrc != "" && curDiscussionImages.find(img => img.src == popUpState.imgSrc) == undefined
                    ?
                        <div>                            
                            <Popup
                                key={0} 
                                open={true}
                                modal
                                nested
                                position="center center"
                                contentStyle={{width: "100%", height: "100%", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", backgroundColor: "rgba(0,0,0,0.5)"}}
                            >
                                {close => (
                                        <div onClick={(e) => popupClick(e, close)} className="w-full h-full back">
                                            <div className="float-left flex p-3">
                                                <h3 className="text-white mx-1">Progress saved</h3>
                                                <div className="relative">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white fixed h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                                    </svg>
                                                    <div className="bg-black rounded-full absolute left-3 top-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="w-full absolute top-1/2 transform -translate-y-1/2 flex justify-evenly flex-wrap back">
                                                <NotesDiscussionImage imageId={getImageId(popUpState.imgSrc, false)} imageSrc={popUpState.imgSrc} closePopup={close} orderId={orderId} setPopUpState={setPopUpState} status={popUpState.status}/>
                                            </div>
                                        </div>
                                    )
                                }
                            </Popup>
                        </div>
                    :
                        <></>
                    }
                </div>
            </div>
        </div>
    );

};

export default DiscussionNotesPage;