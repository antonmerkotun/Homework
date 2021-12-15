import React from "react";
import ButtonModal from "./ButtonModal";

const modalData = [
    {
        id: 1,
        header: "Do you want to add shopping card?",
        closeButton: false,
        text: "",
        action: <ButtonModal/>
    },
    {
        id: 2,
        header: "Delete card?",
        closeButton: false,
        text: "",
        action: <ButtonModal/>
    },

]
export default modalData;