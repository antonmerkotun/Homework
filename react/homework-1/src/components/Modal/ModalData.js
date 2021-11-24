import React from "react";

const modalData = [
    {
        id: 1,
        header: "Do you want to delete this file?",
        closeButton: true,
        text: "Once you delete this file, it won't be possible to undo this action. Are you sure want to delete it?",
        action: <div className={"modal_body-buttons"}>
                    <button>Ok</button>
                    <button>Cancel</button>
                </div>
    },
    {
        id: 2,
        header: "Lorem ipsum dolor sit amet, consectetur",
        closeButton: false,
        text: "Lorem ipsum dolor sit amet, consecteturadipisicing elit. A adipisci, aperiam blanditiisdolores maiores neque rem veritatis.",
        action: <div className={"modal_body-buttons"}>
                    <button>Cancel</button>
                    <button>Ok</button>
                </div>
    }
]

export default modalData