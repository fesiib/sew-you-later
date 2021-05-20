import ImageWithText from './ImageWithText';

const propVars = {
    notes: [
        {
            noteTitle: "Type in a header for the note",
            noteBody: "Type in your note",
        }
    ]
};

function SingleNote(props) {
    return (
        <div className="card mt-1 p-3 grid grid-cols-12 divide-x w-full">
            <div className="col-span-11">
                <input value={propVars.notes[0].noteTitle} className="shadow appearance-none rounded py-1 px-3 mb-3 w-5/6 text-black font-bold h2"/>
                <textarea value={propVars.notes[0].noteBody} rows="2" className="resize-none shadow appearance-none rounded py-1 px-3 w-5/6 text-black"/>
            </div>
            <div className="py-8">
                <button class="text-red-500 p-0 mx-3 shadow-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SingleNote;