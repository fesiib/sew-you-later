import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addReport, addBlankReport, updateDraftReportTitle, updateDraftReportBody } from "../reducers/orderReports";

const propConst = {
    report: "Report",
    noDescription: "No description",
    reportTitle: "Please type your report title.",
    reportBody: "Please type your report description.",
}

const placeholder = {
    
};

var editable = false;

function ReportMessage({reportId, orderId}) {
    const report = useSelector(state => state.orderReports.find((report) => (report.id === reportId && report.orderId === orderId)));
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if(report !== undefined) {
            setTitle(report.title);
            setBody(report.body);
        }
        else {
            const date = (new Date()).toLocaleString();
            dispatch(addBlankReport(date, orderId));
        }
    }, []);

    function onChangeTitle(e) {
        setTitle(e.target.value);
        dispatch(updateDraftReportTitle(e.target.value, orderId));
    }

    function onChangeBody(e) {
        setBody(e.target.value);
        dispatch(updateDraftReportBody(e.target.value, orderId));
    }
    
    return (
        <div className="flex-grow max-w-xl">
            {(() => {
                if(reportId !== -1) {
                    return <div className="card max-w-xl p-5 my-auto">
                                <input placeholder={propConst.report + " " + report.id} value={report ? report.title : title} className="shadow-md appearance-none rounded py-1 px-3 mb-3 w-full text-black font-bold h2"/>
                                <hr className=" border-black"/>
                                <textarea placeholder={propConst.noDescription} value={report ? report.body : body} rows="15" className="resize-none shadow-md appearance-none rounded py-1 px-3 mt-3 w-full text-black"/>
                            </div>;
                }
                    
                else {
                    if(report !== undefined && editable === false) {
                        editable = true;
                        setTitle(report.title);
                        setBody(report.body);
                    }
                    return <div className="card max-w-xl p-5 my-auto">
                                <input onChange={(e) => onChangeTitle(e)} placeholder={propConst.reportTitle} value={title} className="shadow-md appearance-none rounded py-1 px-3 mb-3 w-full text-black font-bold h2"/>
                                <hr className=" border-black"/>
                                <textarea onChange={(e) => onChangeBody(e)} placeholder={propConst.reportBody} value={body} rows="15" className="resize-none shadow-md appearance-none rounded py-1 px-3 mt-3 w-full text-black"/>
                            </div>;
                }
            })()}
        </div>
    );
};

export default ReportMessage;