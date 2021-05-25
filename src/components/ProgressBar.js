const progressBarColorMapping = {
    'complete': "bg-green-400",
    "incomplete": "bg-gray-400",
    "ongoing": "bg-yellow-400",
}

function ProgressBar(props) {

    const getStatus = (index) => {
        let curStepIndex = props.vars.curStepIndex;
        if(index < curStepIndex) 
            return "complete";
        if (index > curStepIndex)
            return "incomplete";
        return props.vars.curStepStatus; 
    };

    return (
        <div className="relative pt-1 pb-4 mt-2 ml-4">
            <div className="mb-4 text-xs flex rounded bg-gray-400 space-x-0.5">
                {props.vars.steps.split('-').map((title, index) => 
                    <div style={{ width: "17%" }} className="flex flex-col my-0.5 mx-0.5 text-center border border-gray-400">
                        <div className={`h-2 shadow-none text-black justify-center ${progressBarColorMapping[(getStatus(index))]}`}>
                            <div className="mt-3">
                                {title}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

};

export default ProgressBar;
