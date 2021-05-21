const largeIcons = 

<svg className="m-2" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.25 0.25H16.9167V16.9167H0.25V0.25ZM0.25 21.0833H16.9167V37.75H0.25V21.0833ZM21.0833 0.25H37.75V16.9167H21.0833V0.25ZM21.0833 21.0833H37.75V37.75H21.0833V21.0833Z" fill="black"/>
</svg>;

const mediumIcons = 

<svg className="m-2" width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29.675 0.333008V17.6663H16.325V0.333008H29.675ZM32.175 17.6663H45.5V0.333008H32.175V17.6663ZM29.675 37.6663V20.333H16.325V37.6663H29.675ZM32.175 20.333V37.6663H45.5V20.333H32.175ZM13.825 20.333H0.5V37.6663H13.825V20.333ZM13.825 17.6663V0.333008H0.5V17.6663H13.825Z" fill="black"/>
</svg>;

const smallIcons = 

<svg className="m-2" width="48" height="37" viewBox="0 0 48 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.375 10.625H10.2083V0.125H0.375V10.625ZM0.375 23.75H10.2083V13.25H0.375V23.75ZM12.6667 23.75H22.5V13.25H12.6667V23.75ZM24.9583 23.75H34.7917V13.25H24.9583V23.75ZM12.6667 10.625H22.5V0.125H12.6667V10.625ZM24.9583 0.125V10.625H34.7917V0.125H24.9583ZM37.25 23.75H47.0833V13.25H37.25V23.75ZM0.375 36.875H10.2083V26.375H0.375V36.875ZM12.6667 36.875H22.5V26.375H12.6667V36.875ZM24.9583 36.875H34.7917V26.375H24.9583V36.875ZM37.25 36.875H47.0833V26.375H37.25V36.875ZM37.25 0.125V10.625H47.0833V0.125H37.25Z" fill="black"/>
</svg>;

function SizeBar(props) {

    return (
        <div className="inline-flex">
            <div className="cursor-pointer">
                {largeIcons}  
            </div>
            <div className="cursor-pointer">
                {mediumIcons}
            </div>
            <div className="cursor-pointer">
                {smallIcons}
            </div>
        </div>
    );

};

export default SizeBar;