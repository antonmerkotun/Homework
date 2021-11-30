import React from "react";

const modalData = [
    {
        id: 1,
        header: "Do you want to add shopping card ?",
        closeButton: false,
        text: "",
        action: <div className={"modal_body-buttons"}>
            <button className={"modal_body-buttons-save"}>Ok</button>
            <button className={"modal_body-buttons-cancel"}>Cancel</button>
        </div>
    },
    {
        id: 2,
        header: "Lorem ipsum dolor sit amet, consectetur",
        closeButton: false,
        text: "Lorem ipsum dolor sit amet, consecteturadipisicing elit. A adipisci, aperiam blanditiisdolores maiores neque rem veritatis.",
        action: <div className={"modal_body-buttons"}>
            <button className={"modal_body-buttons-cancel"}>Cancel</button>
            <button className={"modal_body-buttons-save"}>Ok</button>
        </div>
    }
]
export default modalData;