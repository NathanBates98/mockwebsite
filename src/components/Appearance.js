import React, { useState } from "react";


const Appearance = props => {
    const appearanceClass = props.isOpen ? "appearance open" : "appearance";
    {/*point budget initialisation*/}
    const [pointbudgetValue,onpointbudgetChange]=useState(1000000);
    {/*fov initialisation*/}
    const [fovValue,onfovChange]=useState(60);


    return (
        <div className={appearanceClass}>
             {/*point budget slider*/}
            <div>Point Budget: {pointbudgetValue}</div>
            <div class="slidecontainer">
                <input
                    id="pointBudget"
                    type="range"
                    value={pointbudgetValue}
                    min="100000"
                    max="10000000"
                    onChange={({ target: { value: radius } }) => {
                        onpointbudgetChange(radius);
                      }}
                />
            </div>
             {/*field of view slider*/}
            <div>Field of View: {fovValue}</div>
            <div class="slidecontainer">
                <input
                    id="fieldofView"
                    type="range"
                    value={fovValue}
                    min="20"
                    max="100"
                    onChange={({ target: { value: radius } }) => {
                        onfovChange(radius);
                      }}
                />
            </div>
        </div>
    );
};
export default Appearance;