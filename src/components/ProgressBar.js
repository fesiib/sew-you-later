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
        <div className="relative pt-1 pb-4 mt-1 mx-4">
            <div className="mb-4 text-xs flex rounded bg-gray-400 px-0.5">
                {props.vars.steps.split('-').map((title, index, arr) => 
                    <div style={{ width: `${100/arr.length}%` }} className="flex flex-col my-0.5 px-0.5 text-center border border-gray-400">
                        <div className={`h-2 shadow-none text-black justify-center ${progressBarColorMapping[(getStatus(index))]}`}>
                            <div className="mt-3 text-sm">
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
