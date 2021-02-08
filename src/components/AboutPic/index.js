import React from "react";
import Picture from "../../images/Cruz11.jpg";


function AboutPic() {
  return(
      <div className="aboutpic">
        <img src={Picture} className="img-thumbnail" alt="profile"/>
      </div>
  )
}

export default AboutPic;
