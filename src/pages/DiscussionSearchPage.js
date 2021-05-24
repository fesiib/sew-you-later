import ImageSearchTopBar from '../components/ImageSearchTopBar';
import Notification from '../components/Notification';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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

function DiscussionSearchPage(props) {

    const [gallerySize, setGallerySize] = useState('medium');

    const parentOrganizationUpdate = (option) => {
        console.log(option);
        /* TODO (when the dataset stuff is ready) */
    };

    function moveTo(href) {
        return () => {
            window.location = "/" + href + window.location.search;
        }
    }

    return (

        <div className="h-screen w-screen">
            <Navbar />
            <Sidebar />
            <div className="h-5/6 ml-18 mt-8">
                <div className="inline-flex w-full h-5/6">
                    <div className="flex flex-col w-1/6 h-full border-r border-black">
                        <h3 className="ml-4 mb-4 px-4 font-bold">
                            {propConst.refImagesHeader}
                        </h3>
                        <div className={{height: "calc(100% - 44px)"}} className="gallery-xsmall w-full pt-6 mb-5 pr-0 overflow-scroll justify-around">
                            <Notification type="check" position="top-right">
                                <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" />
                            </Notification>
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" />
                            <Notification type="check" position="top-right">
                                <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" />
                            </Notification>
                            <Notification type="check" position="top-right">
                                <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" />
                            </Notification>
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" />
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" />
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" />
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" />
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
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>      
                            <Notification type="check" position="top-right">
                                <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" />
                            </Notification>
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" />
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" />
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed inline-flex items-center bottom-0 ml-18 w-full h-28 rounded-xl bg-white border border-black">
                <h3 className="font-bold text-center w-1/5">
                    4 {propConst.imagesChosenText}
                </h3>
                <div className="gallery-xxsmall w-4/5 h-full pr-0 items-center">
                    <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" />
                    <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" />
                    <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" />
                    <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" />
                </div>
            </div>
        </div>
    );

};

export default DiscussionSearchPage;