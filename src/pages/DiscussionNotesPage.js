import Notification from '../components/Notification';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import FAQButton from '../components/FAQButton';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import NotesDiscussionImage from '../components/NotesDiscussionImage';
import Popup from 'reactjs-popup';

const propConst = {
    viewNotesHeader: "View Notes",
    searchImagesButtonText: "Search Images",
};

function DiscussionNotesPage(props) {

    const orderId = new URLSearchParams(window.location.search).get('orderId');
    const allDiscussionImages = useSelector(state => state.discussionImages);
    const curDiscussionImages = allDiscussionImages.filter(img => img.parentId == orderId);

    function moveTo(href) {
        return () => {
            window.location = "/" + href + window.location.search;
        }
    }

    function popupClick(e, close) {
        if(typeof e.target.className.includes === "function")
            if(e.target.className.includes("back"))
                close();
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
                    {curDiscussionImages.map((img, index) => (
                        <Notification type="check" position="top-right">                                        
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
                        </Notification> 
                    ))}
                </div>
            </div>
        </div>
    );

};

export default DiscussionNotesPage;