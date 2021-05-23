import ImageSearchTopBar from '../components/ImageSearchTopBar';
import Notification from '../components/Notification';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

/* 
    Note: The "calc()" values should be changed 
   if there happens some change on the sizes 
   of the relevant components! 
*/

function DiscussionSearchPage(props) {

    return (

        <div className="h-screen w-screen">
            <Navbar/>
            <Sidebar/>
            <div style={{height: "calc(100% - 88px)"}} className="ml-16 mt-2">
                <div className="inline-flex w-full h-5/6">
                    <div className="flex flex-col w-1/6 h-full border-r border-black">
                        <h3 className="ml-6 px-2 font-bold">
                            Reference Images
                        </h3>
                        <div className={{height: "calc(100% - 44px)"}} className="gallery-xsmall w-full pt-6 pr-0 overflow-scroll justify-around">
                            <Notification type="check" position="top-right">
                                <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                            </Notification>
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                            <Notification type="check" position="top-right">
                                <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                            </Notification>
                            <Notification type="check" position="top-right">
                                <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                            </Notification>
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                        </div>
                    </div>
                    <div className="w-5/6 h-full px-4">
                        <h3 className="font-bold px-4">
                            Search Images
                        </h3>
                        <div className="flex justify-between items-center px-4">
                            <ImageSearchTopBar/>
                            <button className="bg-indigo-900 h-10 self-start">View Notes</button>
                        </div>
                        <div style={{height: "calc(100% - 105px)"}} className="gallery-large pt-4 px-8 justify-around overflow-scroll">
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>      
                            <Notification type="check" position="top-right">
                                <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>    
                            </Notification>
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>    
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>    
                            <img className="thumbnail " src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                        </div>
                    </div>
                </div>
                <div className="inline-flex items-center w-full h-1/6 rounded-xl bg-white border border-black">
                    <h3 className="font-bold text-center w-1/5">
                        4 Images chosen
                    </h3>
                    <div className="gallery-xxsmall w-4/5 h-full pr-0 items-center">
                        <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                        <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                        <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                        <img className="thumbnail border-4 border-green-400" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default DiscussionSearchPage;