import ImageWithText from './ImageWithText';
import ReportMessage from '../components/ReportMessage'; 
import ReportImages from '../components/ReportImages'; 
import Popup from 'reactjs-popup';


const propVars = {
    reportTitle: "Report 1 Lorem ipsum  Lorem ipsum",
    reportDate: new Date(), //returns the current date
    reportBody: "Dear Customer, I completed the production of the arms and the pockets. You can check the attached images. Also ... Dear Customer, I completed the production of the arms and the pockets. You can check the attached images.",
    imgLink: "https://v1.tailwindcss.com/img/card-top.jpg"
};

function ReportBrief(props) {
    function modalClick(e, close) {
        if(typeof e.target.className.includes === "function")
            if(e.target.className.includes("back"))
                close();
    };
    return (
        <div className="card w-96 p-5 shadow-lg">
            <div className="flex mb-4">
                <h1 className="w-72 line-clamp-2">{propVars.reportTitle}</h1>
                <Popup
                    trigger={
                        <button className="w-16 h-16 rounded-full green text-4xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    }
                    modal
                    nested
                    position="center center"
                    
                    contentStyle={{width: "100%", height: "100%", backdropFilter: "blur(6px)", backgroundColor: "rgba(0,0,0,0.5)"}}
                >
                    {close => (
                            <div onClick={(e) => modalClick(e, close)} className="w-full h-full back">
                                <button onClick={close} className="float-right p-0 m-4 shadow-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <div className="w-full absolute top-1/2 transform -translate-y-1/2 flex justify-evenly flex-wrap back">
                                    <ReportImages/>
                                    <ReportMessage/>
                                </div>
                            </div>
                        )
                    }
                </Popup>
                
            </div>
            <div className="mb-4">
                <h2>{"Posted: " + propVars.reportDate.toLocaleString()}</h2>
            </div>
            <div className="mb-4 h-32">
                <p className="line-clamp-5">{propVars.reportBody}</p>
            </div> 
            <div className="flex justify-evenly">
                <img className="thumbnail w-36 h-36" src={propVars.imgLink}/>
                <ImageWithText/>
            </div>
        </div>
    );
};

export default ReportBrief;