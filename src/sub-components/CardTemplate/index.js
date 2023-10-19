import React from "react";
import "./cardTemplate.css"

const CardTemplate = ({imageSrc,cardContent,contentTitle,contentDate}) => {
    return(
        <div className="card-template">
            <img src={imageSrc}/>
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