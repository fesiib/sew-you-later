import { useDispatch, useSelector } from 'react-redux';

import ImageWithText from './ImageWithText';
import ReportMessage from '../components/ReportMessage';
import ReportImages from '../components/ReportImages';
import PopupWidget from '../components/PopupWidget';

const propVars = {
    reportTitle: "Report 1 Lorem ipsum  Lorem ipsum",
    reportDate: new Date(), //returns the current date
    reportBody: "Dear Customer, I completed the production of the arms and the pockets. You can check the attached images. Also ... Dear Customer, I completed the production of the arms and the pockets. You can check the attached images.",
    imgLink: "https://v1.tailwindcss.com/img/card-top.jpg"
};

function ReportBrief({ id, report }) {
    const images = useSelector(state => state.reportImages.filter(image => image.parentReportId === id));
    const n = images.length;

    var imgRendered = [];
    if (n == 0)
        imgRendered.push(<h2 className="text-gray-400">Posted without image</h2>);
    if (n >= 1)
        imgRendered.push(<img className="thumbnail w-36 h-36" src={images[0].src} />);
    if (n === 2)
        imgRendered.push(<img className="thumbnail w-36 h-36" src={images[1].src} />);
    if (n > 2)
        imgRendered.push(<ImageWithText vars={{
            referenceImage: images[1].src,
            text: n - 2,
        }} />);

    return (
        <div className="card w-84 shadow-lg">
            <div className="flex p-4 mt-2 mb-2">
                <h1 className="w-64 line-clamp-2 ml-4 mt-2">{report.title === "" ? "Report " + report.id.toString() : report.title}</h1>
                <PopupWidget
                    popupButton={
                        <button className="w-16 h-16 rounded-full green text-4xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    }
                    popupContent={
                        <div className="w-full absolute top-1/2 transform -translate-y-1/2 flex justify-evenly flex-wrap back">
                            <ReportImages reportId={id} />
                            <ReportMessage reportId={id} />
                        </div>
                    }
                />
            </div>
            <div className="ml-8">
                <div className="mb-4">
                    <h2>{"Posted: " + report.postDate}</h2>
                </div>
                <div className="mb-4 h-32">
                    <p className="line-clamp-5">{report.body}</p>
                </div>
            </div>
            <div className="flex justify-evenly pb-6">
                {imgRendered}
            </div>
        </div>
    );
};

export default ReportBrief;