import React from 'react'

function Alert(props) {
    return (
        <div style={{ height: '3rem' }}>
            {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
                {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert;