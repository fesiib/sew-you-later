import {useSelector} from 'react-redux';
import EstimatedDue from './EstimatedDue';
import ProgressBar from './ProgressBar';

const propConstUS = {
    statusTitle: "Status: ",
};

const propConstTR = {
    statusTitle: "Durum: ",
};

function OrderProgress(props) {
    const language = useSelector(state => state.langReducer.language);
    const propConst = (language == "TUR" ? propConstTR : propConstUS);
  
    const isPrevOrder = (props.vars.curStepIndex === 4 && props.vars.curStepStatus == "complete");
    
    return (
        <div className="m-10 flex flex-col bg-white rounded-xl">
            <div className="m-5">
                <h2 className="mb-4 ml-3">{propConst.statusTitle + props.vars.curStepDesc}</h2>
                <ProgressBar vars={props.vars}/>
            </div>
            <div className="mb-4 mr-6 -mt-4 flex justify-end">
                <EstimatedDue vars={props.vars}/>
            </div>
        </div>
    );

};

export default OrderProgress;