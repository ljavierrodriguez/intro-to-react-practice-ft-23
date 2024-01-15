import React from 'react'

function CardNoticia(props) {
    return (
        <div className="card">
            <img src={props.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.button.url} className="btn btn-primary">{props.button.label}</a>
            </div>
        </div>
    )
}

export default CardNoticia