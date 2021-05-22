const propVars = {
    reportTitle: "Please type a report title.",
    reportBody: "Dear Customer, I completed the production of the arms and the pockets. You can check the attached images. Also ... Dear Customer, I completed the production of the arms and the pockets. You can check the attached images.",
};

function ReportMessage(props) {
    return (
        <div className="card max-w-xl p-5 my-auto flex-grow">
            <input value={propVars.reportTitle} className="shadow-md appearance-none rounded py-1 px-3 mb-3 w-full text-black font-bold h2"/>
            <hr className=" border-black"/>
            <textarea value={propVars.reportBody} rows="15" className="resize-none shadow-md appearance-none rounded py-1 px-3 mt-3 w-full text-black"/>
        </div>
    );
};

export default ReportMessage;