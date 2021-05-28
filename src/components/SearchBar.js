import {SearchIcon} from '@heroicons/react/solid';
import { useState } from 'react';


function SearchBar(props) {

    const defaultPlaceholder = "Search for images here";
    const errorPlaceholder = "Error: Problem Occured While Fetching Images :(";
    const [textInput, setTextInput] = useState("");
    const [placeholder, setPlaceHolder] = useState(defaultPlaceholder);
    var searchButton;

    const handleEvent = (e) => {
        if(placeholder == errorPlaceholder) {
            setPlaceHolder(defaultPlaceholder);
        }
        setTextInput(e.target.value);
    };

    const checkEnter = (e) => {
        const code =  e.keyCode || e.which;;
        if(code == 13) { // enter key
            searchButton.click();
        }  
    }

    async function search()  {
        const url = `https://pilgrim.wtf:25565/?search=${textInput} clothes`;
        fetch(url).then(response => {
            response.json().then(data => {
                setPlaceHolder(defaultPlaceholder);
                props.setSearchResults(data.filter((val, index) => index < 20));
            }).catch(reason => {
                setPlaceHolder(errorPlaceholder);
                console.log(reason);
            });
        }).catch(reason => {
            setPlaceHolder(errorPlaceholder);
            console.log(reason);
        });
        setTextInput("");
        setPlaceHolder("Searching...");
    };

    const makeSearch = () => {
        search();
    };

    return (
        <div className="flex">
            <input className="flex-1 w-120 p-2 rounded-lg rounded-r-none focus:outline-none" type="text" placeholder={placeholder} value={textInput} onChange={handleEvent} onKeyPress={checkEnter}/>
            <button ref={button => searchButton = button} className="flex-shrink-0 bg-white rounded-l-none rounded-lg" onClick={() => {makeSearch()}}>    
                <SearchIcon className="text-gray-600 bg-white h-5 w-5"/>
            </button>
        </div>
    );

};

export default SearchBar;