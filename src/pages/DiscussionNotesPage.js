import Notification from '../components/Notification';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import {Link} from 'react-router-dom';

const propConst = {
    viewNotesHeader: "View Notes",
    searchImagesButtonText: "Search Images",
};

function DiscussionNotesPage(props) {

    return (
        <div className="h-screen w-screen">
            <Navbar/>
            <Sidebar/>
            <div className="ml-20 mt-2 mr-8">
                <h3 className="font-bold mx-8">{propConst.viewNotesHeader}</h3>
                <div className="flex justify-end">
                    <Link to="/discussion-search">
                        <button className="bg-indigo-900 h-10">{propConst.searchImagesButtonText}</button>
                    </Link>
                    </div>
                <div className="p-4 m-4 gallery-large">    
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
    );

};

export default DiscussionNotesPage;