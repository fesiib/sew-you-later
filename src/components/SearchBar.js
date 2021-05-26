import {SearchIcon} from '@heroicons/react/solid';

function SearchBar(props) {

    const makeSearch = () => {
        props.setSearchResults([
            '/image_database/1.png',
            '/image_database/2.png',
            '/image_database/3.png',
            '/image_database/4.png',
            '/image_database/5.png',
            '/image_database/6.png',
        ]);
    };

    return (
        <div className="flex">
            <input className="flex-1 w-120 p-2 rounded-lg rounded-r-none focus:outline-none" type="text" placeholder="Search for tags here"/>
            <button className="flex-shrink-0 bg-white rounded-l-none rounded-lg" onClick={() => {makeSearch()}}>    
                <SearchIcon className="text-gray-600 bg-white h-5 w-5"/>
            </button>
        </div>
    );

};

export default SearchBar;