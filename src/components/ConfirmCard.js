function ConfirmCard(props) {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-96 rounded-lg bg-white p-4 divide-y-2 space-y-2">
                <div id="cardTitle" className="">
                    <h1>{props.title}</h1>
                </div>
                <div id="cardBody" className="">
                    <div id="cardContent" className="py-4">
                        <p>{props.body}</p>
                    </div>
                    <div id="cardButton" className="flex justify-between space-x-4">
                        <button onClick={props.onDecline} className="red w-1/2">
                            {props.decline}
                        </button>
                        <button onClick={props.onConfirm} className="green w-1/2">
                            {props.confirm}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmCard;