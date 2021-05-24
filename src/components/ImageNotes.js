import SingleNote from './SingleNote';

const propVars = {
    imgLink: "https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"
    //will get array of singlenotes
};

function ImageNotes({imageId, imageSrc, closePopup}) {
    return (
        <div className="max-w-5xl w-full lg:flex card overflow-hidden">
            <img className="mx-auto lg:mx-0 h-96 w-96 object-cover" src={imageSrc}/>
            <div className="flex flex-col w-full rounded-b lg:rounded-b-none lg:rounded-r p-4 pb-0 leading-normal">
                <div className="flex justify-between">
                    <div className="flex mb-3">
                        <h2 className="text-black mr-1 my-auto">Notes</h2>
                        <button className="text-black p-0 rounded-full shadow-none my-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                    <div className="grid grid-cols-2 divide-x content-center">
                        <div>
                            <button className="text-red-500 p-0 mx-2 shadow-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
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
                <hr className="border-black"/>
                {/* single notes will be listed in this div */}
                <div className="fixed-height overflow-y-scroll pr-3"> 
                    <SingleNote/>
                    <SingleNote/>
                    <SingleNote/>
                </div>
            </div>
        </div>
    );
}

export default ImageNotes;