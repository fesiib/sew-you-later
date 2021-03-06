import SearchBar from './SearchBar';
import SortBy from './SortBy';
import SizeBar from './SizeBar';
import {useSelector} from 'react-redux';

const propConstUS = {
    viewNotesButtonText: "View Notes",
};
const propConstTR = {
    viewNotesButtonText: "Notları Görüntüle",
};

function ImageSearchTopBar(props) {
    const language = useSelector(state => state.langReducer.language);
    const propConst = (language == "TUR" ? propConstTR : propConstUS);

    function moveTo(href) {
        return () => {
            window.location = "/" + href + window.location.search;
        }
    }
    return (
        <div className="flex flex-wrap">
            <div className="flex-shrink-0 w-116 my-4 mr-4">
                <SearchBar setSearchResults={props.setSearchResults}/>
            </div>
            <div className="flex justify-between">
                <div className="flex">
                    <span className="z-10">
                        <SortBy options={["Relevance", "A-Z"]} parentUpdate={props.parentOrganizationUpdate} />
                    </span>
                    <span className="m-2">
                        <SizeBar setGallerySize={props.setGallerySize} />
                    </span>
                </div>
                <div className="flex ml-4">
                    <button className="self-start bg-indigo-900 h-10 mt-3" onClick={moveTo('discussion-notes')}>{propConst.viewNotesButtonText}</button>
                </div>
            </div>
        </div>
    );

};

export default ImageSearchTopBar;