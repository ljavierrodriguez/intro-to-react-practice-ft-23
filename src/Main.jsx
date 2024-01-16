import React from 'react'

const Alert = (props) => {
    return (
        <div className={`alert alert-${props.color}`} role="alert">
            {props.text}
        </div>
    )
}

const Progress = (props) => {
    return (
        <div className="progress my-1" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
            <div className={`progress-bar bg-${props.color}`} style={{ 'width': `${props.size}%` }}>{`${props.size}%`}</div>
        </div>
    )
}


const Main = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <Alert color="primary" text="Primary" />
                    <Alert color="secondary" text="Secondary" />
                    <Alert color="success" text="Success" />
                    <Alert color="danger" text="Danger" />
                </div>
                <div className="col-md-12">
                    <Progress size="50" color="info" />
                    <Progress size="35" color="danger" />
                    <Progress size="80" color="dark" />
                </div>
            </div>
        </>
    )
}

export default Main