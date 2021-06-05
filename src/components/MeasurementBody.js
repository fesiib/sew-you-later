// add send and title
// fix null problem

import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allBPs, IMMUTABLE, addBP, removeBP, resetBP } from '../reducers/measurements';
import MenBody from './MenBody';
import {changeLanguage} from '../reducers/language';

const propConstTR = {
    placeholderClassName: "invisible resize-none shadow-md appearance-none rounded py-1 px-3 mt-3 w-full text-gray-300",
    selectedClassName: "resize-none shadow-md appearance-none rounded py-1 px-3 mt-3 w-full text-black",
    reset: "Yenile",
    neck: "boyun",
    bust: "gogus",
    waist: "bel",
    hips: "bel",
    thigh: "thigh",
    knee: "knee",
    calf: "calf",
    waistToKnee: "waist-to-knee",
    line: "line",
    ankle: "ankle",
    inseam: "inseam",
    waistBack: "waist-back",
    outseam: "outseam",
    neckBack: "neck-back",
    wrist: "wrist",
    sleeveLength: "sleeve-length",
    backLength: "back-length",
    rise: "rise",
    shoulder: "shoulder",
    shadows: "shadows",
}

const propConstUS = {
    placeholderClassName: "invisible resize-none shadow-md appearance-none rounded py-1 px-3 mt-3 w-full text-gray-300",
    selectedClassName: "resize-none shadow-md appearance-none rounded py-1 px-3 mt-3 w-full text-black",
    reset: "Reset",
    neck: "neck",
    bust: "bust",
    waist: "waist",
    hips: "hips",
    thigh: "thigh",
    knee: "knee",
    calf: "calf",
    waistToKnee: "waist-to-knee",
    line: "line",
    ankle: "ankle",
    inseam: "inseam",
    waistBack: "waist-back",
    outseam: "outseam",
    neckBack: "neck-back",
    wrist: "wrist",
    sleeveLength: "sleeve-length",
    backLength: "back-length",
    rise: "rise",
    shoulder: "shoulder",
    shadows: "shadows",
}

const SHADOW_LINE_DASH_STYLE = {
    stroke: "rgb(0, 0, 0)",
    strokeDasharray: "20px",
    strokeWidth: "30px",
    visibility: "hidden",
};

const PLACEHOLDER_SHADOW_STYLE = {
    opacity: "0.3",
    stroke: "green",
    strokeWidth: "40px",
};

const PLACEHOLDER_SHADOW_STYLE_CSS = "stroke: green; stroke-width: 40px; opacity:0.3;";
const ON_SHADOW_STYLE_CSS = "stroke: green; fill: rgba(216, 216, 216, 0); stroke-width: 50px; opacity: 0.5;";
const SELECTED_SHADOW_STYLE_CSS = "stroke: blue; fill: rgba(216, 216, 216, 0); stroke-width: 50px; opacity: 0.7;";


const LINE_STYLE = {
    stroke: "rgb(0, 0, 0)",
    strokeWidth: "5px",
};

const LINE_DASH_STYLE = {
    stroke: "rgb(0, 0, 0)",
    strokeDasharray: "20px",
    strokeWidth: "2px",
};

const ELLIPSE_STYLE = {
    paintOrder: "stroke markers",
    stroke: "rgb(0, 0, 0)",
    strokeWidth: "5px",
    fill: "rgba(216, 216, 216, 0)",
    strokeDasharray: "8px",
};

function containsObject(obj, list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}

function MeasurementBody(props) {

    const language = useSelector(state => state.langReducer.language);
    const propConst = (language == "TUR" ? propConstTR : propConstUS);
    const dispatch = useDispatch();

    const { bodyParts, status } = useSelector(state => state.measurementsReducer);

    const BPRefsShadow = allBPs.map((label, id) => {
        return React.createRef();
    });

    const BPRefsAct = allBPs.map((label, id) => {
        return React.createRef();
    });

    const selectionRef = React.createRef();
    const resetRef = React.createRef();

    const _addBP = (value) => {
        if(!props.isPrevOrder)
            dispatch(addBP(value));
    };

    const _removeBP = (value) => {
        if(!props.isPrevOrder)
            dispatch(removeBP(value));
    };

    const _resetBP = () => {
        if(!props.isPrevOrder)
            dispatch(resetBP());
    }

    const _setupBP = () => {
        for (let value = 1; value < allBPs.length; value++) {
            if (BPRefsShadow[value].current == null) {
                continue;
            }
            if (containsObject(value, bodyParts)) {
                BPRefsShadow[value].current.setAttribute('style', SELECTED_SHADOW_STYLE_CSS);
            }
            else {
                BPRefsShadow[value].current.setAttribute('style', PLACEHOLDER_SHADOW_STYLE_CSS);
            }
        }
        if (status === IMMUTABLE) {
            resetRef.current.disabled = true;
            resetRef.current.className = "invisible";
        }
    };

    let highlightLeaveTimeout = null;

    const highlightBP = (event, show, value) => {
        event.stopPropagation();
        if (highlightLeaveTimeout != null)
            clearTimeout(highlightLeaveTimeout);

        if (show) {
            selectionRef.current.innerHTML = allBPs[value];
            selectionRef.current.className = propConst.selectedClassName;
            if (status !== IMMUTABLE && !containsObject(value, bodyParts)) {
                event.target.setAttribute('style', ON_SHADOW_STYLE_CSS);
                //BPRefs[value].current.setAttribute('style', SELECTED_ELLIPSE_STYLE_CSS);
            }
        }
        else {
            highlightLeaveTimeout = setTimeout(() => {
                if (selectionRef.current != null) {
                    selectionRef.current.innerHTML = allBPs[0];
                    selectionRef.current.className = propConst.placeholderClassName;
                }
                if (status !== IMMUTABLE && !containsObject(value, bodyParts)) {
                    event.target.setAttribute('style', PLACEHOLDER_SHADOW_STYLE_CSS);
                    //BPRefs[value].current.setAttribute('style', PLACEHOLDER_ELLIPSE_STYLE_CSS);
                }
            }, 0);
            highlightLeaveTimeout = null;
        }
    };

    const onClick = (event, value) => {
        event.stopPropagation();
        event.preventDefault();
        if (status === IMMUTABLE) {
            return;
        }
        if (containsObject(value, bodyParts)) {
            //remove
            _removeBP(value);
            event.target.setAttribute('style', ON_SHADOW_STYLE_CSS);
        }
        else {
            //add
            _addBP(value);
            event.target.setAttribute('style', SELECTED_SHADOW_STYLE_CSS);
        }
    };

    const onClickReset = (event) => {
        event.stopPropagation();
        event.preventDefault();
        _resetBP();
    };

    useEffect(_setupBP);

    return (
        <div className="card min-w-min max-w-max m-0 pt-6 pl-10 pr-10 bg-white rounded-xl">
            <div className="flex flex-row">
                <div ref={selectionRef} className={propConst.placeholderClassName}>
                    {allBPs[0]}
                </div>
                {!props.isPrevOrder &&
                    <button ref={resetRef} onClick={onClickReset} className="flex-end right-0 -mr-4 green cursor-pointer">
                        {propConst.reset}
                    </button>
                }
            </div>

            <div className="-mt-6">
                <svg version="1.0" width="450px" height="600px" viewBox="0 0 1273.000000 1475.000000" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(100.000000,0)">
                        <MenBody />
                        <ellipse ref={BPRefsAct[1]} style={ELLIPSE_STYLE} cx="199.541" cy="224.842" rx="46.517" ry="10.166">
                            <title>{propConst.neck}</title>
                        </ellipse>
                        <ellipse ref={BPRefsAct[2]} style={ELLIPSE_STYLE} cx="199.516" cy="441.128" rx="123.063" ry="16.052">
                            <title>{propConst.bust}</title>
                        </ellipse>
                        <ellipse ref={BPRefsAct[3]} style={ELLIPSE_STYLE} cx="199.108" cy="635.715" rx="109.814" ry="15.365">
                            <title>{propConst.waist}</title>
                        </ellipse>
                        <ellipse ref={BPRefsAct[4]} style={ELLIPSE_STYLE} cx="200.215" cy="766.757" rx="124.502" ry="15.417">
                            <title>{propConst.hips}</title>
                        </ellipse>
                        <ellipse ref={BPRefsAct[5]} style={ELLIPSE_STYLE} cx="135.668" cy="880.432" rx="59.492" ry="14.524">
                            <title>{propConst.thigh}</title>
                        </ellipse>
                        <ellipse ref={BPRefsAct[6]} style={ELLIPSE_STYLE} cx="265.768" cy="1087.489" rx="39.042" ry="7.629">
                            <title>{propConst.knee}</title>
                        </ellipse>
                        <ellipse ref={BPRefsAct[7]} style={ELLIPSE_STYLE} cx="135.407" cy="1207.006" rx="44.595" ry="6.66">
                            <title>{propConst.calf}</title>
                        </ellipse>
                        <g ref={BPRefsAct[8]}>
                            <title>{propConst.waistToKnee}</title>
                            <line style={LINE_DASH_STYLE} x1="308.904" y1="635.727" x2="443.429" y2="636.67" />
                            <line style={LINE_DASH_STYLE} x1="308.904" y1="1089.408" x2="440.809" y2="1091.502" />
                            <g transform="matrix(0.968635, 0, 0, 0.79578, -462.072723, 38.298904)">
                                <title>{propConst.line}</title>
                                <line style={LINE_STYLE} x1="947.874" y1="748.392" x2="946.616" y2="1327.349" />
                                <line style={LINE_STYLE} x1="938.388" y1="750.404" x2="958.033" y2="750.404" />
                                <line style={LINE_STYLE} x1="936.731" y1="1326.849" x2="956.376" y2="1326.849" />
                            </g>
                        </g>
                        <ellipse ref={BPRefsAct[9]} style={ELLIPSE_STYLE} cx="763.77" cy="1402.417" rx="35.057" ry="7.472">
                            <title>{propConst.ankle}</title>
                        </ellipse>
                        <g ref={BPRefsAct[10]}>
                            <title>{propConst.inseam}</title>
                            <line style={LINE_STYLE} x1="717.814" y1="822.78" x2="716.556" y2="1401.737" />
                            <line style={LINE_STYLE} x1="708.328" y1="824.792" x2="727.973" y2="824.792" />
                            <line style={LINE_STYLE} x1="706.671" y1="1401.237" x2="726.316" y2="1401.237" />
                        </g>
                        {/* <g ref={BPRefs[11]}>
                        <title>rise</title>
                        <line style={LINE_STYLE} x1="201.028" y1="825.571" x2="201.16" y2="632.214"/>
                        <line style={LINE_STYLE} x1="191.084" y1="826.146" x2="210.729" y2="826.146"/>
                    </g> */}
                        <ellipse style={ELLIPSE_STYLE} cx="719.976" cy="642.827" rx="109.814" ry="15.365">
                            <title>{propConst.waistBack}</title>
                        </ellipse>
                        <g ref={BPRefsAct[12]}>
                            <title>{propConst.outseam}</title>
                            <g transform="matrix(1.208778, 0, 0, 1.312076, -157.546906, -340.904968)">
                                <title>{propConst.line}</title>
                                <line style={LINE_STYLE} x1="947.874" y1="748.392" x2="946.616" y2="1327.349" />
                                <line style={LINE_STYLE} x1="938.388" y1="750.404" x2="958.033" y2="750.404" />
                                <line style={LINE_STYLE} x1="936.731" y1="1326.849" x2="956.376" y2="1326.849" />
                            </g>
                            <line style={LINE_DASH_STYLE} x1="827.495" y1="641.548" x2="962.02" y2="642.491" />
                            <line style={LINE_DASH_STYLE} x1="797.906" y1="1400.388" x2="996.157" y2="1401.331" />
                        </g>
                        <ellipse style={ELLIPSE_STYLE} cx="717.623" cy="222.857" rx="46.517" ry="10.166">
                            <title>{propConst.neckBack}</title>
                        </ellipse>

                        <ellipse ref={BPRefsAct[14]} style={ELLIPSE_STYLE} cx="886.008" cy="749.985" rx="23.857" ry="5">
                            <title>{propConst.wrist}</title>
                        </ellipse>

                        <g ref={BPRefsAct[15]} transform="matrix(1, 0, 0, 0.7825, 226.241714, -348.25293)">
                            <title>{propConst.sleeveLength}</title>
                            <line style={LINE_STYLE} x1="717.814" y1="822.78" x2="716.556" y2="1401.737" />
                            <line style={LINE_STYLE} x1="708.328" y1="824.792" x2="727.973" y2="824.792" />
                            <line style={LINE_STYLE} x1="706.671" y1="1401.237" x2="726.316" y2="1401.237" />
                        </g>
                        <g ref={BPRefsAct[13]} transform="matrix(1, 0, 0, 0.718637, 2.729032, -369.910614)">
                            <title>{propConst.backLength}</title>
                            <line style={LINE_STYLE} x1="717.814" y1="822.78" x2="716.556" y2="1401.737" />
                            <line style={LINE_STYLE} x1="708.328" y1="824.792" x2="727.973" y2="824.792" />
                            <line style={LINE_STYLE} x1="706.671" y1="1401.237" x2="726.316" y2="1401.237" />
                        </g>
                        <g ref={BPRefsAct[11]} transform="matrix(1, 0, 0, 0.686668, -153.819855, 77.642952)">
                            <title>{propConst.rise}</title>
                            <line style={LINE_STYLE} x1="873.171" y1="822.78" x2="871.971" y2="1078.371" />
                            <line style={LINE_STYLE} x1="863.363" y1="822.78" x2="883.008" y2="822.78" />
                            <line style={LINE_STYLE} x1="862.437" y1="1078.371" x2="882.082" y2="1078.371" />
                        </g>
                        <g ref={BPRefsAct[16]} transform="matrix(0.000001, 1, -0.75028, -0.000001, 1585.595703, -620.930603)">
                            <title>{propConst.shoulder}</title>
                            <line style={LINE_STYLE} x1="860.137" y1="913.787" x2="858.951" y2="1078.371" />
                            <line style={LINE_STYLE} x1="850.405" y1="913.787" x2="870.05" y2="913.787" />
                            <line style={LINE_STYLE} x1="849.417" y1="1078.371" x2="869.062" y2="1078.371" />
                        </g>

                        <title>{propConst.shadows}</title>
                        <ellipse ref={BPRefsShadow[1]}
                            onClick={(event) => onClick(event, 1)}
                            onMouseEnter={(event) => highlightBP(event, true, 1)}
                            onMouseLeave={(event) => highlightBP(event, false, 1)}
                            style={PLACEHOLDER_SHADOW_STYLE} cx="199.541" cy="224.842" rx="46.517" ry="10.166">
                            <title>{propConst.neck}</title>
                        </ellipse>
                        <ellipse ref={BPRefsShadow[2]}
                            onClick={(event) => onClick(event, 2)}
                            onMouseEnter={(event) => highlightBP(event, true, 2)}
                            onMouseLeave={(event) => highlightBP(event, false, 2)}
                            style={PLACEHOLDER_SHADOW_STYLE} cx="199.516" cy="441.128" rx="123.063" ry="16.052">
                            <title>{propConst.bust}</title>
                        </ellipse>
                        <ellipse ref={BPRefsShadow[3]}
                            onClick={(event) => onClick(event, 3)}
                            onMouseEnter={(event) => highlightBP(event, true, 3)}
                            onMouseLeave={(event) => highlightBP(event, false, 3)}
                            style={PLACEHOLDER_SHADOW_STYLE} cx="199.108" cy="635.715" rx="109.814" ry="15.365">
                            <title>{propConst.waist}</title>
                        </ellipse>
                        <ellipse ref={BPRefsShadow[4]}
                            onClick={(event) => onClick(event, 4)}
                            onMouseEnter={(event) => highlightBP(event, true, 4)}
                            onMouseLeave={(event) => highlightBP(event, false, 4)}
                            style={PLACEHOLDER_SHADOW_STYLE} cx="200.215" cy="766.757" rx="124.502" ry="15.417">
                            <title>{propConst.hips}</title>
                        </ellipse>
                        <ellipse ref={BPRefsShadow[5]}
                            onClick={(event) => onClick(event, 5)}
                            onMouseEnter={(event) => highlightBP(event, true, 5)}
                            onMouseLeave={(event) => highlightBP(event, false, 5)}
                            style={PLACEHOLDER_SHADOW_STYLE} cx="135.668" cy="880.432" rx="59.492" ry="14.524">
                            <title>{propConst.thigh}</title>
                        </ellipse>
                        <ellipse ref={BPRefsShadow[6]}
                            onClick={(event) => onClick(event, 6)}
                            onMouseEnter={(event) => highlightBP(event, true, 6)}
                            onMouseLeave={(event) => highlightBP(event, false, 6)}
                            style={PLACEHOLDER_SHADOW_STYLE} cx="265.768" cy="1087.489" rx="39.042" ry="7.629">
                            <title>{propConst.knee}</title>
                        </ellipse>
                        <ellipse ref={BPRefsShadow[7]}
                            onClick={(event) => onClick(event, 7)}
                            onMouseEnter={(event) => highlightBP(event, true, 7)}
                            onMouseLeave={(event) => highlightBP(event, false, 7)}
                            style={PLACEHOLDER_SHADOW_STYLE} cx="135.407" cy="1207.006" rx="44.595" ry="6.66">
                            <title>{propConst.calf}</title>
                        </ellipse>
                        <ellipse ref={BPRefsShadow[14]}
                            onClick={(event) => onClick(event, 14)}
                            onMouseEnter={(event) => highlightBP(event, true, 14)}
                            onMouseLeave={(event) => highlightBP(event, false, 14)}
                            style={PLACEHOLDER_SHADOW_STYLE} cx="886.008" cy="749.985" rx="23.857" ry="3">
                            <title>{propConst.wrist}</title>
                        </ellipse>
                        <ellipse ref={BPRefsShadow[9]}
                            onClick={(event) => onClick(event, 9)}
                            onMouseEnter={(event) => highlightBP(event, true, 9)}
                            onMouseLeave={(event) => highlightBP(event, false, 9)}
                            style={PLACEHOLDER_SHADOW_STYLE} cx="763.77" cy="1402.417" rx="35.057" ry="7.472">
                            <title>{propConst.ankle}</title>
                        </ellipse>

                        <g>
                            <title>{propConst.waistToKnee}</title>
                            <line style={SHADOW_LINE_DASH_STYLE} x1="308.904" y1="635.727" x2="443.429" y2="636.67" />
                            <line style={SHADOW_LINE_DASH_STYLE} x1="308.904" y1="1089.408" x2="440.809" y2="1091.502" />
                            <g transform="matrix(0.968635, 0, 0, 0.79578, -462.072723, 38.298904)">
                                <title>{propConst.waistToKnee}</title>
                                <line ref={BPRefsShadow[8]}
                                    onClick={(event) => onClick(event, 8)}
                                    onMouseEnter={(event) => highlightBP(event, true, 8)}
                                    onMouseLeave={(event) => highlightBP(event, false, 8)}
                                    style={PLACEHOLDER_SHADOW_STYLE}
                                    x1="947.874" y1="748.392" x2="946.616" y2="1327.349" />
                                <line x1="938.388" y1="750.404" x2="958.033" y2="750.404" />
                                <line x1="936.731" y1="1326.849" x2="956.376" y2="1326.849" />
                            </g>
                        </g>
                        <g>
                            <title>{propConst.inseam}</title>
                            <line ref={BPRefsShadow[10]}
                                onClick={(event) => onClick(event, 10)}
                                onMouseEnter={(event) => highlightBP(event, true, 10)}
                                onMouseLeave={(event) => highlightBP(event, false, 10)}
                                style={PLACEHOLDER_SHADOW_STYLE} x1="717.814" y1="822.78" x2="716.556" y2="1401.737" />
                            <line x1="708.328" y1="824.792" x2="727.973" y2="824.792" />
                            <line x1="706.671" y1="1401.237" x2="726.316" y2="1401.237" />
                        </g>
                        <g>
                            <title>{propConst.outseam}</title>
                            <g transform="matrix(1.208778, 0, 0, 1.312076, -157.546906, -340.904968)">
                                <title>{propConst.outseam}</title>
                                <line ref={BPRefsShadow[12]}
                                    onClick={(event) => onClick(event, 12)}
                                    onMouseEnter={(event) => highlightBP(event, true, 12)}
                                    onMouseLeave={(event) => highlightBP(event, false, 12)}
                                    style={PLACEHOLDER_SHADOW_STYLE} x1="947.874" y1="748.392" x2="946.616" y2="1327.349" />
                                <line x1="938.388" y1="750.404" x2="958.033" y2="750.404" />
                                <line x1="936.731" y1="1326.849" x2="956.376" y2="1326.849" />
                            </g>
                            <line style={SHADOW_LINE_DASH_STYLE} x1="827.495" y1="641.548" x2="962.02" y2="642.491" />
                            <line style={SHADOW_LINE_DASH_STYLE} x1="797.906" y1="1400.388" x2="996.157" y2="1401.331" />
                        </g>
                        <g transform="matrix(1, 0, 0, 0.7825, 226.241714, -348.25293)">
                            <title>{propConst.sleeveLength}</title>
                            <line ref={BPRefsShadow[15]}
                                onClick={(event) => onClick(event, 15)}
                                onMouseEnter={(event) => highlightBP(event, true, 15)}
                                onMouseLeave={(event) => highlightBP(event, false, 15)}
                                style={PLACEHOLDER_SHADOW_STYLE} x1="717.814" y1="822.78" x2="716.556" y2="1401.737" />
                            <line style={LINE_STYLE} x1="708.328" y1="824.792" x2="727.973" y2="824.792" />
                            <line style={LINE_STYLE} x1="706.671" y1="1401.237" x2="726.316" y2="1401.237" />
                        </g>
                        <g transform="matrix(1, 0, 0, 0.718637, 2.729032, -369.910614)">
                            <title>{propConst.backLength}</title>
                            <line ref={BPRefsShadow[13]}
                                onClick={(event) => onClick(event, 13)}
                                onMouseEnter={(event) => highlightBP(event, true, 13)}
                                onMouseLeave={(event) => highlightBP(event, false, 13)}
                                style={PLACEHOLDER_SHADOW_STYLE} x1="717.814" y1="822.78" x2="716.556" y2="1401.737" />
                            <line style={LINE_STYLE} x1="708.328" y1="824.792" x2="727.973" y2="824.792" />
                            <line style={LINE_STYLE} x1="706.671" y1="1401.237" x2="726.316" y2="1401.237" />
                        </g>
                        <g transform="matrix(1, 0, 0, 0.686668, -153.819855, 77.642952)">
                            <title>{propConst.rise}</title>
                            <line ref={BPRefsShadow[11]}
                                onClick={(event) => onClick(event, 11)}
                                onMouseEnter={(event) => highlightBP(event, true, 11)}
                                onMouseLeave={(event) => highlightBP(event, false, 11)}
                                style={PLACEHOLDER_SHADOW_STYLE} x1="873.171" y1="822.78" x2="871.971" y2="1078.371" />
                            <line style={LINE_STYLE} x1="863.363" y1="822.78" x2="883.008" y2="822.78" />
                            <line style={LINE_STYLE} x1="862.437" y1="1078.371" x2="882.082" y2="1078.371" />
                        </g>
                        <g transform="matrix(0.000001, 1, -0.75028, -0.000001, 1585.595703, -620.930603)">
                            <title>{propConst.shoulder}</title>
                            <line ref={BPRefsShadow[16]}
                                onClick={(event) => onClick(event, 16)}
                                onMouseEnter={(event) => highlightBP(event, true, 16)}
                                onMouseLeave={(event) => highlightBP(event, false, 16)}
                                style={PLACEHOLDER_SHADOW_STYLE} x1="860.137" y1="913.787" x2="858.951" y2="1078.371" />
                            <line style={LINE_STYLE} x1="850.405" y1="913.787" x2="870.05" y2="913.787" />
                            <line style={LINE_STYLE} x1="849.417" y1="1078.371" x2="869.062" y2="1078.371" />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default MeasurementBody;