import Popup from 'reactjs-popup';

// const propVars = {
//     popupButton: <button className="w-16 h-16 rounded-full green text-4xl">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                 </button>,
    
//     popupContent:   <div className="w-full absolute top-1/2 transform -translate-y-1/2 flex justify-evenly flex-wrap back">
//                         <ReportImages/>
//                         <ReportMessage/>
//                     </div>
// };

function PopupWidget(props) {
    // this is to check whether clicked outside the popup widget.
    // the topmost wrapping div should have 'back' class
    function popupClick(e, close) {
        if(typeof e.target.className.includes === "function")
            if(e.target.className.includes("back"))
                close();
    };
    return (
        <Popup
            trigger={
                props.popupButton
            }
            modal
            nested
            position="center center"
            contentStyle={{width: "100%", height: "100%", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", backgroundColor: "rgba(0,0,0,0.5)"}}
        >
            {close => (
                    <div onClick={(e) => popupClick(e, close)} className="w-full h-full back">
                        <button onClick={close} className="float-right p-0 m-4 shadow-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="w-full absolute top-1/2 transform -translate-y-1/2 flex justify-evenly flex-wrap back">
                            {props.popupContent}
                        </div>
                    </div>
                )
            }
        </Popup>
    );
};

export default PopupWidget;