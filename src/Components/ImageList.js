import React from "react";
import ImageURL from "./ImageURL";
import Error from "./Error";

const ImageList = props => {
  const results = props.data;
  let imgs;
  if (results.length > 0) {
    imgs = results.map(img => <ImageURL url={img.urls.small} key={img.id} />);
  } else {
    imgs = <Error />;
  }
  return <ul className="img-list">{imgs}</ul>;
};

export default ImageList;
