import React from "react";
import Image from "react-bootstrap/Image";

const ImageURL = props => (
  <li className="img-wrap">
    <Image src={props.url} />
  </li>
);

export default ImageURL;
