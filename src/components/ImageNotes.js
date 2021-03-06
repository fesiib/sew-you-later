import { useDispatch, useSelector } from 'react-redux';
import { addNote, deleteNote } from '../reducers/imageNotes';
import { deleteImage } from '../reducers/reportImages';
import Popup from 'reactjs-popup';
import { storage } from '../services/firebase';

import SingleNote from './SingleNote';
import ConfirmCard from './ConfirmCard';

const propConstUS = {
    notes: "Notes",
    confirmCardTitle: "Delete image?",
    confirmCardBody: "Deleting the image will permanently delete all the notes taken for this image!",
    confirmCardCancel: "Cancel",
    confirmCardConfirm: "Delete",
    thereIsNoNotes: "There isn't any notes for this image",
    youCanAddNotesGuide: <h2 className="text-gray-400 mt-4 text-center flex justify-center">
                            You can add notes by clicking 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            icon
                        </h2>,
    
};

const propConstTR = {
    notes: "Notlar",
    confirmCardTitle: "Resmi sil?",
    confirmCardBody: "Resmi silmek resim için alınmış bütün notları da silecektir!",
    confirmCardCancel: "İptal",
    confirmCardConfirm: "Sil",
    thereIsNoNotes: "Bu resim için alınmış not bulunmamaktadır",
    youCanAddNotesGuide: <h2 className="text-gray-400 mt-4 text-center flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            butonuna tıklayarak not ekleyebilirsiniz
                        </h2>,
    
};

const popupStyle = {width: "100%", height: "100%", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", backgroundColor: "rgba(0,0,0,0.5)"}

function ImageNotes({imageId, imageSrc, reportId, orderId, closePopup}) {
    const language = useSelector(state => state.langReducer.language);
    const propConst = (language == "TUR" ? propConstTR : propConstUS);

    const notes = useSelector(state => state.imageNotes.filter((note) => (note.parentImageId === imageId && note.orderId === orderId)));
    const dispatch = useDispatch();

    const renderedNotes = notes.map(note => {
        return <SingleNote key={note.id} id={note.id} reportId={reportId} orderId={orderId} imageId={imageId}/>
    }).reverse();

    const _deleteImage = () => {
        dispatch(deleteImage(imageId));
        // var filename = imageSrc.substring(imageSrc.lastIndexOf('/')+1);
        // console.log(filename);
        // storage.ref("report_images").child(filename).delete();
        notes.forEach(note => {
            dispatch(deleteNote(note.id));
        });
        closePopup();
    }

    function popupClick(e, close) {
        if(typeof e.target.className.includes === "function")
            if(e.target.className.includes("back"))
                close();
    };

    return (
        <div className="max-w-5xl w-full lg:flex card overflow-hidden">
            <img alt="" className="mx-auto lg:mx-0 h-96 w-96 object-cover" src={imageSrc}/>
            <div className="flex flex-col w-full rounded-b lg:rounded-b-none lg:rounded-r p-4 pb-0 leading-normal">
                <div>
                    {reportId === -1 ?
                        <div className="flex justify-between">
                            <div className="flex mb-3">
                                <h2 className="text-black mr-1 my-auto">{propConst.notes}</h2>
                                <button onClick={() => dispatch(addNote("", "", imageId, reportId, orderId))} className="text-black p-0 rounded-full shadow-none my-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </button>
                            </div> 
                            <div className="grid grid-cols-2 divide-x content-center">
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
                                                        onConfirm={_deleteImage} 
                                                        onDecline={close} 
                                                        title={propConst.confirmCardTitle} 
                                                        body={propConst.confirmCardBody}
                                                        decline={propConst.confirmCardCancel}
                                                        confirm={propConst.confirmCardConfirm}
                                                    />
                                                </div>
                                            )
                                        }
                                    </Popup>
                                </div>
                                <div>
                                    <button onClick={closePopup} className="text-black p-0 mx-2 shadow-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="flex justify-between">
                            <h2 className="text-black mr-1 my-auto">{propConst.notes}</h2>
                            <div>
                                <button onClick={closePopup} className="text-black p-0 mx-2 shadow-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    }
                    
                </div>
                <hr className="border-black"/>
                {/* single notes will be listed in this div */}
                {reportId !== -1 ? 
                    <div className="fixed-height overflow-y-scroll pr-3"> 
                        {renderedNotes.length === 0 ?
                            <h2 className="text-gray-400 mt-4 text-center">{propConst.thereIsNoNotes}</h2>
                            :
                            renderedNotes
                        }
                    </div>
                    :
                    <div className="fixed-height overflow-y-scroll pr-3"> 
                        {renderedNotes.length === 0 ?
                            propConst.youCanAddNotesGuide
                            :
                            renderedNotes
                        }
                    </div>
                }
            </div>
        </div>
    );
}

export default ImageNotes;