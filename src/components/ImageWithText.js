function ImageWithText(props) {

    return (
        <div className="relative max-w-max"> {/* Image box with over text */}
            <img className="w-36 h-36 filter brightness-50 thumbnail" src={props.vars.referenceImage}/>
            <h3 className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{props.vars.text}+</h3>
        </div> 
    );

};

export default ImageWithText;