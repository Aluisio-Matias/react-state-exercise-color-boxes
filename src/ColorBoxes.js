import React, { useState } from "react";
import Box from "./Box";
import { choice } from "./helpers"
import "./ColorBoxes.css";
import "./ChangeButton.css"


function ColorBoxes(props) {
    const [boxes, setBoxes] = useState(
        Array.from({
            length: props.numBoxes
        }, () => choice(props.allColors))
    );
    function handleClick(e) {
        let idx = Math.floor(Math.random() * props.numBoxes);

        setBoxes(boxes => {
            let boxCopy = [...boxes];
            boxCopy[idx] = choice(props.allColors);
            return boxCopy;
        });
    };
    const boxComp = boxes.map((color, i) => <Box key={i} color={color} />);

    return (
        <div>
            <section className="ColorBoxes">{boxComp}</section>
            <button className="change-button" onClick={handleClick}>Change</button>
        </div>
    );
};

ColorBoxes.defaultProps = {
    numBoxes: 16,
    allColors: [
        "aquamarine",
        "black",
        "burlywood",
        "blue",
        "chocolate",
        "dodgerBlue",
        "darkblue",
        "darkslategray",
        "gray",
        "green",
        "lavender",
        "lightseagreen",
        "orange",
        "peachpuff",
        "purple",
        "seagreen",
        "steelBlue",
        "tomato",
        "teal",
        "turquoise",
        "darkred",
        "yellow",
        "yellowGreen"
    ]
};

export default ColorBoxes;