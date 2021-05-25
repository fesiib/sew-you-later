import ImageSearchTopBar from '../components/ImageSearchTopBar';
import Notification from '../components/Notification';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {useSelector} from 'react-redux';
import Popup from 'reactjs-popup';
import ReportImages from '../components/ReportImages';
import ReportMessage from '../components/ReportMessage';
import NotesDiscussionImage from '../components/NotesDiscussionImage';

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

    const [gallerySize, setGallerySize] = useState('medium');

    const orderId = new URLSearchParams(window.location.search).get('orderId');
    const allDiscussionImages = useSelector(state => state.discussionImages);
    const curDiscussionImages = allDiscussionImages.filter(img => img.parentId == orderId);

    const refImages = useSelector(state => state.curRefImages);
    const curRefImages = refImages.filter(img => img.parentId == orderId);

    const parentOrganizationUpdate = (option) => {
        console.log(option);
        /* TODO (when the dataset stuff is ready) */
    };

    function popupClick(e, close) {
        if(typeof e.target.className.includes === "function")
            if(e.target.className.includes("back"))
                close();
    };

    const getImageId = (img) => {
        const res = curDiscussionImages.find(image => image.src == img.src); 
        if(res != undefined) 
            return res.id; 
        return undefined;
    };

    return (

        <div className="h-screen w-screen">
            <Navbar />
            <Sidebar />
            <div className="h-5/6 ml-20 mt-8">
                <div className="inline-flex w-full h-5/6">
                    <div className="flex flex-col w-1/6 h-full border-r border-black">
                        <h3 className="ml-4 mb-4 px-4 font-bold">
                            {propConst.refImagesHeader}
                        </h3>
                        <div style={{height: "calc(100% - 44px)"}} className="gallery-xsmall w-full pt-6 mb-5 pr-0 overflow-scroll justify-around">
                            {
                                curRefImages.map((img, index) => (
                                    getImageId(img) != undefined 
                                        ?
                                    <Notification type="check" position="top-right">
                                        <Popup
                                                key={index} 
                                                trigger={<img className="thumbnail border-4 border-green-400 cursor-pointer" src={img.src}/>}
                                                modal
                                                nested
                                                position="center center"
                                                contentStyle={{width: "100%", height: "100%", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", backgroundColor: "rgba(0,0,0,0.5)"}}
                                            >
                                                {close => (
                                                        <div onClick={(e) => popupClick(e, close)} className="w-full h-full back">
                                                            <div className="w-full absolute top-1/2 transform -translate-y-1/2 flex justify-evenly flex-wrap back">
                                                                <NotesDiscussionImage imageId={getImageId(img)} imageSrc={img.src} closePopup={close} orderId={orderId}/>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                        </Popup>
                                    </Notification> 
                                        :
                                        <Popup
                                            key={index} 
                                            trigger={<img className="thumbnail cursor-pointer" src={img.src}/>}
                                            modal
                                            nested
                                            position="center center"
                                            contentStyle={{width: "100%", height: "100%", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", backgroundColor: "rgba(0,0,0,0.5)"}}
                                        >
                                            {close => (
                                                    <div onClick={(e) => popupClick(e, close)} className="w-full h-full back">
                                                        <div className="w-full absolute top-1/2 transform -translate-y-1/2 flex justify-evenly flex-wrap back">
                                                            <NotesDiscussionImage imageId={getImageId(img)} imageSrc={img.src} closePopup={close} orderId={orderId}/>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </Popup>
                                        )
                            )}
                            
                        </div>
                    </div>
                    <div className="w-5/6 h-full ml-4">
                        <h3 className="font-bold px-4">
                            {propConst.searchImagesHeader}
                        </h3>
                        <div className="relative justify-between items-center px-4">
                            <ImageSearchTopBar className="w-full" setGallerySize={setGallerySize} parentOrganizationUpdate={parentOrganizationUpdate} />
                        </div>
                        <div style={{height: "calc(100% - 125px)"}} className={`gallery-${gallerySize} pt-4 px-8 justify-around overflow-scroll`}>
                            {/* <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>      
                            <Notification type="check" position="top-right">
                                <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" />
                            </Notification>
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" />
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" />
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" /> */}
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

                            <Popup
                                key={index} 
                                trigger={
                                        <img className="thumbnail border-4 border-green-400 cursor-pointer" src={img.src}/>    
                                        }
                                modal
                                nested
                                position="center center"
                                contentStyle={{width: "100%", height: "100%", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", backgroundColor: "rgba(0,0,0,0.5)"}}
                            >
                                {close => (
                                        <div onClick={(e) => popupClick(e, close)} className="w-full h-full back">
                                            <div className="w-full absolute top-1/2 transform -translate-y-1/2 flex justify-evenly flex-wrap back">
                                                <NotesDiscussionImage imageId={img.id} imageSrc={img.src} closePopup={close} orderId={orderId}/>
                                            </div>
                                        </div>
                                    )
                                }
                            </Popup>
                        
                    ))}
                </div>
            </div>
        </div>
    );

};

export default DiscussionSearchPage;