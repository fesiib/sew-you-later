import CheckIcon from '@heroicons/react/solid/CheckIcon';

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

    let typeSetup = "rounded-full notification-red text-center text-white";
    if(props.type && props.type == "check") {
        typeSetup = "bg-green-400 text-black";
        data = <CheckIcon/>;
    }

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