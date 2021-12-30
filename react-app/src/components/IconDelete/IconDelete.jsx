import React from "react";
import "./IconDelete.scss"

const IconDelete = (props) => {
    return (
        <>
            <button id={props.id} data-modal-id={props.dataModalId} className="icon-delete" onClick={props.onClick}/>
        </>
    )
}

export default IconDelete