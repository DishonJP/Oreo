import React from 'react'
import { Star, StarBorder } from "@material-ui/icons";

const Customer = ({name,model,image}) => {
    return (
        <div className="review">
            <img src={image} alt="" />
            <div>
    <h4>{name}</h4>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis distinctio nostrum minima culpa nemo totam
                voluptatibus.
              </span>
              <div>
    <div>{model}</div>
                <div className="detail-container-data-rating">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <StarBorder className="color" />
                </div>
              </div>
            </div>
          </div>
    )
}

export default Customer
