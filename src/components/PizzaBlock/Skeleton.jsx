import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="130" r="130" />
    <rect x="0" y="270" rx="12" ry="12" width="280" height="26" />
    <rect x="0" y="309" rx="12" ry="12" width="280" height="88" />
    <rect x="0" y="416" rx="12" ry="12" width="90" height="27" />
    <rect x="132" y="407" rx="12" ry="12" width="150" height="45" />
    <rect x="194" y="428" rx="0" ry="0" width="1" height="0" />
  </ContentLoader>
);

export default Skeleton;
