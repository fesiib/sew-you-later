import ImageSearchTopBar from '../components/ImageSearchTopBar';
import Notification from '../components/Notification';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import FAQButton from '../components/FAQButton';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Popup from 'reactjs-popup';
import ReportImages from '../components/ReportImages';
import ReportMessage from '../components/ReportMessage';
import NotesDiscussionImage from '../components/NotesDiscussionImage';
import {deleteImage, addImage} from '../reducers/discussionImages';

const propConst = {
    refImagesHeader: "Reference Images",
    searchImagesHeader: "Search Images",
    imagesChosenText: "Images Chosen",
};

/* 
    Note: The "calc()" values should be changed 
   if there happens some change on the sizes 
   of the relevant components! 
*/

const popupStyle = {width: "100%", height: "100%", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", backgroundColor: "rgba(0,0,0,0.5)"}

function DiscussionSearchPage(props) {

    const dispatch = useDispatch();

    const [gallerySize, setGallerySize] = useState('medium');
    const [searchResults, setSearchResults] = useState([]);

    const orderId = new URLSearchParams(window.location.search).get('orderId');
    const allDiscussionImages = useSelector(state => state.discussionImages);
    const curDiscussionImages = allDiscussionImages.filter(img => img.parentId == orderId);

    const refImages = useSelector(state => state.curRefImages);
    const curRefImages = refImages.filter(img => img.parentId == orderId);

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
    }, [popUpState]);

    const parentOrganizationUpdate = (option) => {
        //console.log(option);
        /* TODO (when the dataset stuff is ready) */
    };

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
            <div className="h-5/6 ml-20 mt-8">
                <div className="inline-flex w-full h-5/6">
                    <div className="flex flex-col w-1/6 h-full border-r border-black">
                        <h3 className="ml-4 mb-4 px-4 font-bold">
                            {propConst.refImagesHeader}
                        </h3>
                        <div style={{height: "calc(100% - 44px)"}} className="gallery-xsmall w-full pt-6 mb-5 pr-0 overflow-scroll justify-around">
                            {
                                curRefImages.map((img, index) => {
                                    
                                    let imgId = getImageId(img);

                                    return (
                                            imgId != undefined 
                                            ?
                                            <Notification type="check" position="top-right">
                                                <img className="thumbnail border-4 border-green-400 cursor-pointer" src={img.src} onClick={() => viewTheImage(img.src)}/>
                                            </Notification>
                                            :
                                            <div>
                                                <img className="thumbnail cursor-pointer" src={img.src} onClick={() => viewTheImage(img.src)}/>
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
                                                                    <div className="w-full absolute top-1/2 transform -translate-y-1/2 flex justify-evenly flex-wrap back">
                                                                        <NotesDiscussionImage imageId={undefined} imageSrc={img.src} closePopup={close} orderId={orderId} setPopUpState={setPopUpState} status={popUpState.status}/>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                </Popup>
                                            </div>
                                            
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="w-5/6 h-full ml-4">
                        <h3 className="font-bold px-4">
                            {propConst.searchImagesHeader}
                        </h3>
                        <div className="relative justify-between items-center px-4">
                            <ImageSearchTopBar className="w-full" setGallerySize={setGallerySize} parentOrganizationUpdate={parentOrganizationUpdate} setSearchResults={setSearchResults}/>
                        </div>
                        <div style={{height: "calc(100% - 125px)"}} className={`gallery-${gallerySize} pt-4 px-8 justify-around overflow-scroll`}>
                            {searchResults.map((src, index) => {
                                    
                                    let imgId = getImageId(src, false);

                                    return (
                                        imgId != undefined 
                                        ?
                                        <Notification type="check" position="top-right">
                                            <img className="thumbnail border-4 border-green-400 cursor-pointer" src={src} onClick={() => viewTheImage(src)}/>
                                        </Notification>
                                        :
                                        <div>
                                            <img className="thumbnail cursor-pointer" src={src} onClick={() => viewTheImage(src)}/>
                                            <Popup
                                                    key={index} 
                                                    open={popUpState.imgSrc == src}
                                                    modal
                                                    nested
                                                    position="center center"
                                                    contentStyle={{width: "100%", height: "100%", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", backgroundColor: "rgba(0,0,0,0.5)"}}
                                                >
                                                    {close => (
                                                            <div onClick={(e) => popupClick(e, close)} className="w-full h-full back">
                                                                <div className="w-full absolute top-1/2 transform -translate-y-1/2 flex justify-evenly flex-wrap back">
                                                                    <NotesDiscussionImage imageId={undefined} imageSrc={src} closePopup={close} orderId={orderId} setPopUpState={setPopUpState} status={popUpState.status}/>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                            </Popup>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed inline-flex items-center bottom-0 ml-18 w-full h-28 rounded-xl bg-white border border-black">
                <h3 className="font-bold text-center w-1/5">
                    {curDiscussionImages.length} {propConst.imagesChosenText}
                </h3>
                <div className="gallery-xxsmall w-4/5 h-full pr-0 items-center">
                                    
                    {curDiscussionImages.map((img, index) => (

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
                                            <div className="w-full absolute top-1/2 transform -translate-y-1/2 flex justify-evenly flex-wrap back">
                                                <NotesDiscussionImage imageId={img.id} imageSrc={img.src} closePopup={close} orderId={orderId} setPopUpState={setPopUpState} status={popUpState.status}/>
                                            </div>
                                        </div>
                                    )
                                }
                            </Popup>
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
    );

};

export default DiscussionSearchPage;