import React from "react";
import Picture from "../../images/Cruz5.jpg";


function ProfPic() {
  return(
      <div className="profpic">
        <img src={Picture} className="img-thumbnail" alt="profile"/>
      </div>
  )
}

export default ProfPic;
