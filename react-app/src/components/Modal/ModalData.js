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
        header: "Lorem ipsum dolor sit amet, consectetur",
        closeButton: false,
        text: "Lorem ipsum dolor sit amet",
        action: <ButtonModal/>
    }
]
export default modalData;