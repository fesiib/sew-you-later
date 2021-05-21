const progressBarColorMapping = {
    'complete': "bg-green-400",
    "incomplete": "bg-gray-400",
    "ongoing": "bg-yellow-400",
}

const propVars = {
    progressInfo: {
        orderConfirmation: {
            str: "Order Confirmation",
            status: "complete",
        },
        customerResponse: {
            str: "Customer's Response",
            status: "complete",
        },
        discussion: {
            str: "Discussion",
            status: "ongoing",
        },
        measurementRecord: {
            str: "Measurement Record",
            status: "incomplete",
        },
        production: {
            str: "Production",
            status: "incomplete",
        },
        delivery: {
            str: "Delivery",
            status: "incomplete",
        },
    },
}

function ProgressBar(props) {

    return (
        <div className="relative pt-1 pb-4 mt-4 ml-4">
            <div className="mb-4 text-xs flex rounded bg-gray-400">
                {Object.entries(propVars.progressInfo).map(([key, value]) => 
                    <div style={{ width: "17%" }} className=" mr-0.5 ml-0.5 flex flex-col text-center border border-gray-400">
                        <div className={`h-2 shadow-none text-black justify-center ${progressBarColorMapping[value.status]}`}>
                            <div className="mt-2">
                                {value.str}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

};

export default ProgressBar;
