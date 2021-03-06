import CheckIcon from '@heroicons/react/solid/CheckIcon';
import {useSelector} from 'react-redux';

function Notification(props) {

    let data = props.data;

    if(data === true) {
        data = "";
    }

    if(data === 0 || data === false || data === "X") { // no notification
        return (
            <div className="relative max-w-max">
                {props.children}
            </div>
        );
    }

    if(isNaN(data))
        data = "";

    let typeSetup = "rounded-full notification-red text-center text-white";
    if(props.type && props.type == "check") {
        typeSetup = "bg-green-400 text-black";
        data = <CheckIcon/>;
    }
    // else if(props.type && props.type == "auto-save") {
    //     typeSetup = "";
    //     data= <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <path d="M14.8 9C14.9 8.7 15 8.4 15 8C15 5.8 13.2 4 11 4C9.5 4 8.1 4.9 7.5 6.2C7.2 6.1 6.8 6 6.5 6C5.1 6 4 7.1 4 8.5C4 8.7 4 8.9 4.1 9C2.3 9.3 1 10.7 1 12.5C1 14.4 2.6 16 4.5 16H14.5C16.4 16 18 14.4 18 12.5C18 10.7 16.6 9.2 14.8 9ZM8.5 14.9L5.3 11.7L6.7 10.3L8.5 12.1L12.3 8.3L13.7 9.7L8.5 14.9V14.9Z" fill="#6C757D"/>
    //     </svg>;   
    // }

    let posSetup = "transform"; 
    if(props.position && props.position.includes('bottom')) {
        posSetup = `bottom-0 ${posSetup} translate-y-1/2`;
    }
    else {
        posSetup = `top-0 ${posSetup} -translate-y-1/2`;
    }
    if(props.position && props.position.includes('right')) {
        posSetup = `right-0 ${posSetup} translate-x-1/2`;
    }
    else {
        posSetup = `left-0 ${posSetup} -translate-x-1/2`;
    }
    
    let sizeSetup = "h-6 w-6";
    if(props.size) {
        sizeSetup = props.size;
    }

    return (
        <div className="relative max-w-max"> 
            {props.children}
            <span className={`absolute ${posSetup} ${sizeSetup} ${typeSetup}`}>
                {data}
            </span>
        </div>
    );
};

export default Notification;