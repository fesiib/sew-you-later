import { discussionComponent, measurementsComponent, reportsComponent } from "./Sidebar";


function OrderNextStepIcon(props) {
    const getNextStep = (nextStepPage) => {
        if (nextStepPage === "order-measurements") {
            return measurementsComponent;
        }
        if (nextStepPage === "order-reports") {
            return reportsComponent;
        }
        if (nextStepPage === "discussion-search") {
            return discussionComponent;
        }
        if (nextStepPage === "order-details") {
            return orderDetailsComponent;
        }
        alert("could not match" + nextStepPage);
    }

    return <div className="transform scale-200 mt-3 mr-3">{getNextStep(props.vars.nextStepPage)}</div>;
}

export default OrderNextStepIcon;
