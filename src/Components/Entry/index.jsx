import React, { useEffect, useState } from "react";
import $ from "jquery";
import "./index.css";

import LOGO from "../../Assets/logo/Full-Logo-White.svg";

const Entry = () => {
    const [entryScale, setEntryScale] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setEntryScale(1);
            $("#logo").animate({
                opacity: "1"
            }, 5000);
        }, 1000);
    }, []);

    const entrystyles = {
        transform: `scale(${entryScale})`,
        transition: "transform 4s ease",
    };

    return (
        <>
            <div id="entry">
                <img id="logo" src={LOGO} style={entrystyles}/>
            </div>
        </>
    )
}

export default Entry;