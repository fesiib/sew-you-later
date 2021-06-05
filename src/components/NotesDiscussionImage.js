import { useDispatch, useSelector} from 'react-redux';
import { addNote, deleteNote } from '../reducers/discussionImageNotes';
import { deleteImage } from '../reducers/discussionImages';
import {addImage} from '../reducers/discussionImages';
import Popup from 'reactjs-popup';
import {useEffect, useState} from 'react';
import Notification from '../components/Notification';

import SingleNoteDiscussionImage from './SingleNoteDiscussionImage';
import ConfirmCard from './ConfirmCard';

const propConst = {
    notesTitle: "Notes",
    popupTitle: "Delete Notes?",
    popupBody: "This will permanently delete all the notes taken for this image and will close the pop-up.",
    popupDecline: "Cancel",
    popupConfirm: "Delete",
    youCanAddNotesGuide: <h2 className="text-gray-400 mt-4 text-center flex justify-center">You can add notes by clicking 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        icon</h2>,

};

const popupStyle = {width: "100%", height: "100%", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", backgroundColor: "rgba(0,0,0,0.5)"}

function NotesDiscussionImage({imageId, imageSrc, closePopup, orderId, setPopUpState, status}) {
    const notes = useSelector(state => state.discussionImageNotes.filter((note) => note.parentId == imageId));
    const dispatch = useDispatch();
    const curOrder = useSelector(state => state.curOrdersList.find((val) => val.id == orderId));
    const isPrevOrder = (curOrder.curStepIndex === 4 && curOrder.curStepStatus == "complete");

    useEffect(() => {
        //console.log('HI with', imageSrc);
        if(imageId != undefined && notes.length == 0) {
            if(status == "NOTE") {
                //console.log("undef, length:0, note");
                dispatch(addNote("", "", imageId))
            }
            else {
                //console.log("undef, length:0, no note", status);
                setPopUpState({
                    imgSrc: imageSrc,
                    status: "DEL",
                });
            }
        }
        else if(status == "NOTE") {        
            //console.log("only note");
            setPopUpState({
                imgSrc: imageSrc,
                status: "",
            });
        }
    }, [notes]);

    const _deleteImage = () => {
        setPopUpState({
            imgSrc: imageSrc,
            status: "DEL",
        });
        //console.log("begin note erase");
        notes.forEach(note => {
            dispatch(deleteNote(note.id));
        });
        //console.log("end note erase");
    }

    const _deleteImageAndClose = () => {
        setPopUpState({
            imgSrc: imageSrc,
            status: "DEL-CLOSE",
        });
        notes.forEach(note => {
            dispatch(deleteNote(note.id));
        });
    };

    const _addNote = () => {
        if(imageId == undefined) {
            setPopUpState({
                imgSrc: imageSrc,
                status: "ADD",
            });
        }
        else {
            dispatch(addNote("", "", imageId))
        }
    };

    const renderedNotes = notes.map(note => {
        return <SingleNoteDiscussionImage key={note.id} id={note.id} imageId={imageId} isPrevOrder={isPrevOrder}/>
    }).reverse();

    function popupClick(e, close) {
        if(typeof e.target.className.includes === "function")
            if(e.target.className.includes("back")) {
                close();
            }
    };

    const borderColor = notes.length > 0 ? " border-green-400" : " border-gray-200";
    const noteBox = 
        <div className={`max-w-5xl w-full lg:flex card overflow-hidden border-4 border-opacity-50 ${borderColor}`}>
            <img className={`mx-auto lg:mx-0 h-96 w-96 object-cover`} src={imageSrc}/>
            <div className="flex flex-col w-full rounded-b lg:rounded-b-none lg:rounded-r p-4 pb-0 leading-normal">
                <div>
                    {
                        <div className="flex justify-between">
                            <div className="flex mb-3">
                                <h2 className="text-black mr-1 my-auto">Notes</h2>
                                {!isPrevOrder && 
                                    <button onClick={() => _addNote()} className="text-black p-0 rounded-full shadow-none my-auto"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>
                                }
                            </div> 
                            <div className="grid grid-cols-2 divide-x content-center">
                                {!isPrevOrder ?
                                    <div>
                                        <Popup
                                            trigger={
                                                <button className="text-red-500 p-0 mx-2 shadow-none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            }
                                            modal
                                            nested
                                            position="center center"
                                            contentStyle={popupStyle}
                                        >
                                            {close => (
                                                        <div onClick={(e) => popupClick(e, close)} className="w-full h-full back">
                                                            <ConfirmCard 
                                                            onConfirm={_deleteImageAndClose}
                                                            onDecline={close} 
                                                            title="Delete Notes?" 
                                                            body="This will permanently delete all the notes taken for this image and will close the pop-up."
                                                            decline="Cancel"
                                                            confirm="Delete"
                                                        />
                                                    </div>
                                                )
                                            }
                                        </Popup>
                                    </div>
                                    :
                                    <div></div>
                                }
                                <div>
                                    <button onClick={() => setPopUpState({imgSrc: "", status: "",})} className="text-black p-0 mx-2 shadow-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                    
                </div>
                <hr className="border-black"/>
                {/* single notes will be listed in this div */}
                {
                    <div className="fixed-height overflow-y-scroll pr-3"> 
                        {renderedNotes.length === 0 ?
                            !isPrevOrder ?
                            propConst.youCanAddNotesGuide
                            :
                            <h2 className="text-gray-400 mt-4 text-center flex justify-center">There are no notes for this image</h2>
                            :
                            renderedNotes
                        }
                    </div>
                }
            </div>
        </div>;
    
    return (
        notes.length > 0 ?
            <Notification type="check" position="top-left" size="h-9 w-9">
                {noteBox}
            </Notification>
        :
        noteBox
    );
    
}

export default NotesDiscussionImage;