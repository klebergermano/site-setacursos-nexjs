import React from "react";

const SVG = ({
  style = {},
  width = "100%",
  className = "",
  viewBox = "0 0 32 33",
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
<path d="M14.969 9.547l.031.191c0 .193-.096.379-.264.496-.538.372-.467.278-.67.885-.084.253-.33.424-.605.424h-.002c-.664-.002-.549-.038-1.083.338-.112.08-.244.119-.376.119s-.264-.039-.376-.118c-.534-.376-.419-.34-1.083-.338h-.002c-.275 0-.521-.171-.605-.424-.203-.607-.133-.513-.669-.885-.169-.118-.265-.304-.265-.497l.031-.19c.207-.604.208-.488 0-1.094l-.031-.191c0-.193.096-.379.265-.497.536-.372.465-.277.669-.885.084-.253.33-.424.605-.424h.002c.662.002.544.041 1.083-.338.112-.08.244-.119.376-.119s.264.039.376.118c.534.376.419.34 1.083.338h.002c.275 0 .521.171.605.424.203.607.132.513.67.885.168.118.264.304.264.497l-.031.191c-.207.604-.208.488 0 1.094zm-1.469-1.198l-.465-.464-1.41 1.446-.66-.627-.465.464 1.125 1.091 1.875-1.91zm4.5 4.651h-12v1h12v-1zm-1 2h-10v1h10v-1zm1 2h-12v1h12v-1zm1-15h-19v20h24v-20h-5zm3 15.422c-1.151.504-2.074 1.427-2.578 2.578h-14.844c-.504-1.151-1.427-2.074-2.578-2.578v-10.844c1.151-.504 2.074-1.427 2.578-2.578h14.844c.504 1.151 1.427 2.074 2.578 2.578v10.844z"/>
 
 
  </svg>
);

export default SVG;