const propVars = {
    measurementNotesPlaceholder: "Enter Extra Notes if needed",
};

function MeasurementMessage(props) {
    return (
        <div className="card max-w-xl p-5">
            <textarea placeholder={propVars.measurementNotesPlaceholder} rows="15" className="resize-none shadow-md appearance-none rounded py-1 px-3 mt-3 w-full text-black"/>
        </div>
    );
};

export default MeasurementMessage;