const propVars = {
    reportTitle: "Please type a report title.",
    reportBody: "Dear Customer, I completed the production of the arms and the pockets. You can check the attached images. Also ... Dear Customer, I completed the production of the arms and the pockets. You can check the attached images.",
    imgLinks: [
        "https://v1.tailwindcss.com/img/card-top.jpg"
    ]
};

function ReportImages(props) {
    return (
        <div className="card max-w-3xl p-5 flex-grow">
            <h2 className="text-black">Images</h2>
            <div className="flex flex-wrap">
                <button className="flex flex-col justify-center thumbnail border border-dashed w-36 h-36 mx-4 mt-5 p-0">
                    <h2 className="text-gray-400 mx-auto">Upload image</h2>
                    <div className="mx-auto text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                    </div>
                </button>
                <img className="thumbnail w-36 h-36 mx-4 mt-5" src={propVars.imgLinks[0]}/>
                <img className="thumbnail w-36 h-36 mx-4 mt-5" src={propVars.imgLinks[0]}/>
                <img className="thumbnail w-36 h-36 mx-4 mt-5" src={propVars.imgLinks[0]}/>
                <img className="thumbnail w-36 h-36 mx-4 mt-5" src={propVars.imgLinks[0]}/>
                <img className="thumbnail w-36 h-36 mx-4 mt-5" src={propVars.imgLinks[0]}/>
                <img className="thumbnail w-36 h-36 mx-4 mt-5" src={propVars.imgLinks[0]}/>
                <img className="thumbnail w-36 h-36 mx-4 mt-5" src={propVars.imgLinks[0]}/>
                <img className="thumbnail w-36 h-36 mx-4 mt-5" src={propVars.imgLinks[0]}/>
                <img className="thumbnail w-36 h-36 mx-4 mt-5" src={propVars.imgLinks[0]}/>
            </div>
        </div>
    );
};

export default ReportImages;