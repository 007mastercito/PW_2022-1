import location from "../images/location.png"

const Lugar = (props) => {
    return <div className="table">
        <div className="row">
            <div className="col-1 col_img">
                <img className="lugares" src={props.lugar.imageUrl} alt="" /> 
            </div>
            <div className="col-10 mt-5">
                <img className="location" src={location} alt="" /> 
                <span>
                    {props.lugar.location + " "}  
                    <a href={props.lugar.googleMapsUrl}>View on google maps</a>
                </span>
                <p>{props.lugar.description}</p>
            </div>
        </div>
    </div>
}
export default Lugar