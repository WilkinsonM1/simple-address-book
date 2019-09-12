import React from 'react'

// functional component that will display a card with two lines name and address.
const Card = (props)=> {
    return(
    <div className="col-md-6 col-lg-3">
        <div className="card mb-3">
            <div className="card-body">
                <p className="card-title"><span>Name: </span>{props.info.name}</p>
                <p className="card-text">
                    <span>Address: </span>{props.info.address}
                    <span>Post Code: </span>{props.info.postcode}

                </p>

            </div>

        </div>

    </div>
    
     ) }


export default Card;