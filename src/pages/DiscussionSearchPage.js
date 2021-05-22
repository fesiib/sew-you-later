import ImageSearchTopBar from '../components/ImageSearchTopBar';
import Notification from '../components/Notification';
import Navbar from '../components/Navbar';

/* 
    Note: The "calc()" values should be changed 
   if there happens some change on the sizes 
   of the relevant components! 
*/

function DiscussionSearchPage(props) {

    return (

        <div className="h-screen w-screen">
            <Navbar/>
            <div style={{height: "calc(100% - 80px)"}} className="w-full">
                <div className="inline-flex w-full h-4/5">
                    <div className="flex flex-col w-1/5 h-full border-r border-black">
                        <h3 className="ml-6 mb-4 font-bold">
                            Reference Images
                        </h3>
                        <div className={{height: "calc(100% - 44px)"}} className="gallery-xsmall w-full pr-0 overflow-scroll justify-around">
                            <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                            <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                            <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                        </div>
                    </div>
                    <div className="w-4/5 h-full px-4">
                        <h3 className="font-bold">
                            Search Images
                        </h3>
                        <ImageSearchTopBar/>
                        <div style={{height: "calc(100% - 105px)"}} className="gallery-large pr-0 justify-around overflow-scroll">
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>      
                            <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>    
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>    
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>    
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                        </div>
                    </div>
                </div>
                <div className="inline-flex items-center w-full h-1/5 rounded-xl bg-white border border-black">
                    <h3 className="font-bold text-center w-1/5">
                        4 Images chosen
                    </h3>
                    <div className="gallery-xsmall w-4/5 h-full pr-0 items-center">
                        <Notification type="check" position="top-right">
                            <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                        </Notification>
                        <Notification type="check" position="top-right">
                            <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                        </Notification>
                        <Notification type="check" position="top-right">
                            <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                        </Notification>
                        <Notification type="check" position="top-right">
                            <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                        </Notification>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default DiscussionSearchPage;