import SearchBar from './SearchBar';
import SortBy from './SortBy';
import SizeBar from './SizeBar';

function ImageSearchTopBar(props) {

    return (
        <div>
            <div className="flex mt-4">
                <div className="my-4 mr-4">
                    <SearchBar/>
                </div>
                <SortBy options={["Relevance", "A-Z"]}/>
                <div className="m-2">
                    <SizeBar/>
                </div>
            </div>
        </div>
    );

};

export default ImageSearchTopBar;