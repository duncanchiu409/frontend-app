import React from "react";
import "./cardTemplate.css"
import image from '../../treehouse_no_bg_3.png'

const CardTemplate = ({imageSrc,cardContent,contentTitle,contentDate}) => {
    return(
        <div className="card-template">
            <img src={imageSrc} onError={(e) => e.target.src = image}/>
            <div className="card-content">
                {cardContent}
                <div className="date-title">
                    <div>{contentTitle}</div>
                    <div>{contentDate}</div>
                </div>
            </div>
        </div>
    )
}

export default CardTemplate;