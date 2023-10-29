import React from "react";

const About = (prop)=>{
    return(
        <aside>
            <img src={prop.defaultSrc} alt="blog logo" />
            <p>{prop.about}</p>
        </aside>
    )
}

export default About