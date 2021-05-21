function Notification(props) {

    let data = props.data;

    if(data === true) {
        data = "";
    }

    if(data === 0 || data === false) { // no notification
        return (
            <div className="relative max-w-max">
                {props.children}
            </div>
        );
    }

    let posSetup = "left-0 top-0 transform -translate-x-1/2 -translate-y-1/2"; 
    if(props.position && props.position.includes('bottom-right')) {
        posSetup = "right-0 bottom-0 transform translate-x-1/2 translate-y-1/2";
    }
    
    let sizeSetup = "h-6 w-6";
    if(props.size) {
        sizeSetup = props.size;
    }

    return (
        <div className="relative max-w-max"> 
            {props.children}
            <span className={`absolute ${posSetup} ${sizeSetup} rounded-full notification-red text-center text-white`}>
                {data}
            </span>
        </div>
    );
};

export default Notification;