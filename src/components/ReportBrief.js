import ImageWithText from './ImageWithText';

const propVars = {
    reportTitle: "Report 1 Lorem ipsum  Lorem ipsum",
    reportDate: new Date(), //gives the current date
    reportReport: "Dear Customer, I completed the production of the arms and the pockets. You can check the attached images. Also ... Dear Customer, I completed the production of the arms and the pockets. You can check the attached images.",
    imgLink: "https://v1.tailwindcss.com/img/card-top.jpg"
};

function ReportBrief(props) {

    return (
        <div className="card shadow-lg p-5">
            <div className="flex mb-4">
                <h1 className="w-72 line-clamp-2">{propVars.reportTitle}</h1>
                <button className="w-16 h-16 rounded-full green text-4xl">&rarr;</button>
            </div>
            <div className="mb-4">
                <h2>{"Posted: " + propVars.reportDate.toLocaleString()}</h2>
            </div>
            <div className="mb-4 h-32">
                <p className="line-clamp-5">{propVars.reportReport}</p>
            </div> 
            <div className="flex justify-evenly">
                <img className="thumbnail w-36 h-36" src={propVars.imgLink}/>
                <ImageWithText/>
            </div>
        </div>
    );

};

export default ReportBrief;