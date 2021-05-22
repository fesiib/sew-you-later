import ReportBrief from '../components/ReportBrief'; 
import Navbar from '../components/Navbar'; 

const propVars = {
    numOfReports: 4,
};

function OrderReportsPage(props) {
    var reports = [];
    for(var i = 0; i < propVars.numOfReports; i++)
        reports.push(<ReportBrief/>);
    
    return (
        <div>
            <Navbar />
            <div className="m-8 mt-6">
                <div className="flex mb-8">
                    <h1 className="text-black mr-1 my-auto">Order Reports</h1>
                    <button className="text-black p-0 rounded-full shadow-none my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
                {propVars.numOfReports > 0 &&
                    <div className="order-reports">
                        {reports}
                    </div>
                }
                {propVars.numOfReports == 0 &&
                    <div className="w-full my-auto text-center">
                        <h1>There is no reports.</h1>
                        <div className="flex justify-center w-full mx-auto">
                            <h1>You can add a new report clicking the </h1>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h1> icon</h1>
                        </div>
                    </div>
                    
                }
            </div>
        </div>
    );
};

export default OrderReportsPage;