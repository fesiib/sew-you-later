import {SearchIcon} from '@heroicons/react/solid';
import { useState } from 'react';


function SearchBar(props) {

    // const axios = require("axios")
    
    const [textInput, setTextInput] = useState("");

    const handleEvent = (e) => {
        setTextInput(e.target.value);
    };

    async function search()  {
        const url = `http://pilgrim.wtf:25565/?search=${textInput}`;
        // const { data } = await axios.get(url);
        // console.log(data);
        setTextInput("");
    };

    const makeSearch = () => {
        search();
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
            <input className="flex-1 w-120 p-2 rounded-lg rounded-r-none focus:outline-none" type="text" placeholder="Search for images here" value={textInput} onChange={handleEvent}/>
            <button className="flex-shrink-0 bg-white rounded-l-none rounded-lg" onClick={() => {makeSearch()}}>    
                <SearchIcon className="text-gray-600 bg-white h-5 w-5"/>
            </button>
        </div>
    );

};

export default SearchBar;