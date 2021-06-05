import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addNote, deleteNote, updateDraftNoteBody, updateDraftNoteTitle } from '../reducers/imageNotes';

const propConst = {
    noteTitle: "Please type your note title.",
    noteBody: "Please type your note description.",
};

var editable = false;

function SingleNote({id, imageId, reportId}) {
    const note = useSelector(state => state.imageNotes.find((note) => note.id === id));
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if(note !== undefined) {
            setTitle(note.title);
            setBody(note.body);
        }
        else {
            dispatch(addNote("", "", imageId, reportId));
        }
    }, []);

    function onChangeTitle(e) {
        setTitle(e.target.value);
        dispatch(updateDraftNoteTitle(id, e.target.value));
    }

    function onChangeBody(e) {
        setBody(e.target.value);
        dispatch(updateDraftNoteBody(id, e.target.value));
    }

    const _deleteNote = () => {
        dispatch(deleteNote(id));
    }

    return (
        <div>
            {(() => {
                if(reportId !== -1) {
                    return (<div className="card mt-3 p-3 pr-0 grid grid-cols-12 divide-x w-full">
                                <div className="col-span-11">
                                    <input value={note ? note.title : title} className="shadow-md appearance-none rounded py-1 px-3 mb-3 w-5/6 text-black font-bold h2"/>
                                    <textarea value={note ? note.body: body} rows="2" className="resize-none shadow-md appearance-none rounded py-1 px-3 w-5/6 text-black"/>
                                </div>
                                <div className="py-8">
                                </div>
                            </div>);
                }
                    
                else {
                    if(note !== undefined && editable == false) {
                        editable = true;
                        setTitle(note.title);
                        setBody(note.body);
                    }
                    return (<div className="card mt-3 p-3 pr-0 grid grid-cols-12 divide-x w-full">
                                <div className="col-span-11">
                                    <input onChange={(e) => onChangeTitle(e)} placeholder={propConst.noteTitle} value={title} className="shadow-md appearance-none rounded py-1 px-3 mb-3 w-5/6 text-black font-bold h2"/>
                                    <textarea onChange={(e) => onChangeBody(e)} placeholder={propConst.noteBody} value={body} rows="2" className="resize-none shadow-md appearance-none rounded py-1 px-3 w-5/6 text-black"/>
                                </div>
                                <div className="py-8">
                                    <button onClick={_deleteNote} className="text-red-500 p-0 mx-2 shadow-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>)
                }
            })()}
        </div>
    );
};

export default SingleNote;