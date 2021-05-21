import ImageWithText from './ImageWithText';

const propVars = {
    reportTitle: "Report 1 Lorem ipsum  Lorem ipsum",
    reportDate: new Date(), //gives the current date
    reportBody: "Dear Customer, I completed the production of the arms and the pockets. You can check the attached images. Also ... Dear Customer, I completed the production of the arms and the pockets. You can check the attached images.",
    imgLink: "https://v1.tailwindcss.com/img/card-top.jpg"
};

function ReportBrief(props) {
    return (
        <div className="card w-96 p-5 shadow-lg">
            <div className="flex mb-4">
                <h1 className="w-72 line-clamp-2">{propVars.reportTitle}</h1>
                <button className="w-16 h-16 rounded-full green text-4xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
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