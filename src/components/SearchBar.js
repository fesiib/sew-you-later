import {SearchIcon} from '@heroicons/react/solid';
import { useState } from 'react';


function SearchBar(props) {

    const [textInput, setTextInput] = useState("");
    var searchButton;

    const handleEvent = (e) => {
        setTextInput(e.target.value);
    };

    const checkEnter = (e) => {
        const code =  e.keyCode || e.which;;
        if(code == 13) { // enter key
            searchButton.click();
        }  
    }

    async function search()  {
        const url = `http://pilgrim.wtf:25565/?search=${textInput} clothes`;
        fetch(url).then(response => {
            response.json().then(data => {
                setTextInput("");
                props.setSearchResults(data.filter((val, index) => index < 20));
            })  
        }).catch(reason => {
            setTextInput("Error: Problem Occured While Fetching Images :(");
            console.log(reason);
        });
        setTextInput("Searching...");
    };

    const makeSearch = () => {
        search();
    };

    return (
        <div className="flex">
            <input className="flex-1 w-120 p-2 rounded-lg rounded-r-none focus:outline-none" type="text" placeholder="Search for images here" value={textInput} onChange={handleEvent} onKeyPress={checkEnter}/>
            <button ref={button => searchButton = button} className="flex-shrink-0 bg-white rounded-l-none rounded-lg" onClick={() => {makeSearch()}}>    
                <SearchIcon className="text-gray-600 bg-white h-5 w-5"/>
            </button>
        </div>
    );

};

export default SearchBar;