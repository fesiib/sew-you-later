import {useSelector} from 'react-redux';
import {PhotographIcon} from '@heroicons/react/outline';

const propConstUS = {
    imageText: 'images',
};

const propConstTR = {
    imageText: 'resim',  
};

function ImageWithText(props) {

    const language = useSelector(state => state.langReducer.language);
    const propConst = (language == "TUR" ? propConstTR : propConstUS);
    
    return (
        <div className="relative max-w-max"> {/* Image box with over text */}
            {
                props.vars.text === 0
                ?
                <img alt="" className="w-36 h-36 filter thumbnail" src={props.vars.referenceImage}/>
                :
                (
                    <div>
                        <img alt="" className="w-36 h-36 filter brightness-50 thumbnail" src={props.vars.referenceImage}/>
                        <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="flex flex-row justify-center items-center">
                                <h3 className="mr-0.5">{props.vars.text}</h3> 
                                {/* <PhotographIcon className="h-5 ml-0.5"/> */}
                                <h3 className="ml-0.5">{propConst.imageText}</h3>
                            </div> 
                        </div>
                    </div>
                )
            }
        </div> 
    );

};

export default ImageWithText;