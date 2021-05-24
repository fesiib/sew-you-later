import SearchBar from './SearchBar';
import SortBy from './SortBy';
import SizeBar from './SizeBar';

function ImageSearchTopBar(props) {

    return (
        <div>
            <div className="flex">
                <div className="my-4 mr-4">
                    <SearchBar/>
                </div>
                <SortBy options={["Relevance", "A-Z"]} parentUpdate={props.parentOrganizationUpdate}/>
                <div className="m-2">
                    <SizeBar setGallerySize={props.setGallerySize}/>
                </div>
            </div>
        </div>
    );

};

export default ImageSearchTopBar;