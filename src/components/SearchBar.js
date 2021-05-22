import {SearchIcon} from '@heroicons/react/solid';

function SearchBar(props) {

    return (
        <div className="flex">
            <input className="w-116 p-2 rounded-lg rounded-r-none focus:outline-none" type="text" placeholder="Search for tags here"/>
            <button className="flex bg-white rounded-l-none rounded-lg">    
                <SearchIcon className="text-gray-600 bg-white h-5 w-5"/>
            </button>
        </div>
    );

};

export default SearchBar;