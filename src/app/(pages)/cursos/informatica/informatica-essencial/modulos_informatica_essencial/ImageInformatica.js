import React, { Component, useContext } from "react";
import { MobileContext } from "../../../../../../context/MobileContext";

const ImageInformatica = (props) => {
  const mobileInfo = useContext(MobileContext);


  if (mobileInfo.isMobile) {
    return (
      <img
        src={require("../../../../../../assets/img/informatica/" + props.imgMobile)}
      />
    );
  } else {
    return (
      <img
        src={require("../../../../../../assets/img/informatica/" + props.imgDesktop)}
      />
    );
  }
};
export default ImageInformatica;
