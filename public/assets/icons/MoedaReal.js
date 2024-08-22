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


className={`svg-icon ${className || ""}`}

xmlns="http://www.w3.org/2000/svg" 

 image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" 
 
 viewBox="0 0 512 465.548">

<path d="M9.684 234.312H84.25c5.329 0 9.685 4.366 9.685 9.685v170.221c0 5.319-4.366 9.685-9.685 9.685H9.684c-5.319 0-9.684-4.359-9.684-9.685V243.997c0-5.329 4.359-9.685 9.684-9.685zM314.567 0c71.551 0 129.555 58.004 129.555 129.555 0 71.55-58.004 129.554-129.555 129.554-71.55 0-129.554-58.004-129.554-129.554C185.013 58.004 243.017 0 314.567 0zm0 11.779c65.044 0 117.776 52.732 117.776 117.776 0 65.043-52.732 117.775-117.776 117.775-65.043 0-117.774-52.732-117.774-117.775 0-65.044 52.731-117.776 117.774-117.776zm0 14.577c56.995 0 103.199 46.204 103.199 103.195 0 56.995-46.204 103.199-103.199 103.199-56.994 0-103.195-46.204-103.195-103.199 0-56.991 46.201-103.195 103.195-103.195zm19.843 133.751l-.745-.046a71.935 71.935 0 01-5.104-.493 106.7 106.7 0 01-4.809-.745 61.746 61.746 0 01-4.478-.983v-12.687c1.867.169 3.886.305 6.05.414a245.3 245.3 0 006.587.245c2.224.053 4.289.083 6.209.083.129-.003.268.003.397.003 1.387 0 2.77-.142 4.131-.413a5.5 5.5 0 002.707-1.338 3.302 3.302 0 00.907-2.277c0-.063 0-.122-.003-.182v-.963c.003-.066.003-.132.003-.198 0-1-.477-1.933-1.281-2.516a5.031 5.031 0 00-2.879-.903h-4.482c-6.368 0-11.197-1.404-14.483-4.201-3.287-2.803-4.922-7.493-4.912-14.073v-2.714c0-6.034 1.807-10.545 5.428-13.537 2.691-2.237 6.275-3.634 10.757-4.197v-6.46h8.887v6.282c1.118.059 2.237.152 3.253.264 2.237.242 4.415.55 6.414.901 2 .347 3.807.745 5.395 1.109v12.683a220.392 220.392 0 00-8.519-.537 179.464 179.464 0 00-8.606-.202h-.248c-1.294 0-2.585.113-3.859.331a5.06 5.06 0 00-2.793 1.311 3.895 3.895 0 00-1.003 2.605c0 .093.003.185.016.274v.828c-.006.089-.016.176-.016.265 0 1.098.48 2.138 1.307 2.856a6.368 6.368 0 003.552 1.086c.162 0 .324-.01.483-.024h5.431c.219-.003.45-.009.672-.009 3.104 0 6.166.751 8.913 2.188a14.298 14.298 0 015.759 5.97 18.307 18.307 0 011.933 8.179v3.051c0 5.21-.907 9.188-2.717 11.939a13.336 13.336 0 01-7.735 5.547 38.735 38.735 0 01-7.655 1.294v7.063h-8.864v-7.073zm-48.005-61.866c5.249 0 9.618.688 13.126 2.062 3.496 1.377 6.113 3.422 7.881 6.172 1.754 2.747 2.631 6.166 2.631 10.291 0 2.485-.381 4.752-1.109 6.827a17.719 17.719 0 01-3.26 5.598c-1.433 1.654-3.174 3.131-5.219 4.415l15.672 27.265h-17.824l-11.517-23.158h-3.132v23.158h-15.89v-62.63h18.641zm-.219 12.633h-2.532v14.722h2.4c2.396 0 4.296-.629 5.673-1.887 1.387-1.257 2.075-3.319 2.075-6.182 0-2.181-.612-3.833-1.843-4.958-1.228-1.126-3.145-1.695-5.773-1.695zM107.309 408.105l-.003-158.68a2.402 2.402 0 012.4-2.403h71.375l.642.086c15.295 2.767 30.55 8.281 45.771 15.48 15.003 7.102 30.023 15.88 45.036 25.313l55.091.023c7.934.51 14.768 3.293 19.786 7.41 3.866 3.175 6.659 7.166 8.06 11.552 1.413 4.438 1.406 9.267-.348 14.043-1.936 5.259-6 10.465-12.614 15.003-10.094 7.374-21.738 10.856-34.226 12.18l-.073.007c-12.256 1.287-25.323.497-38.542-.682-5.316-.258-8.794 1.993-10.373 5.018a9.005 9.005 0 00-1.016 3.965 9.235 9.235 0 00.834 4.058c1.479 3.19 5.001 5.712 10.681 5.739l.165.006c3.631.272 7.517-.109 11.297-.48 2.886-.281 5.729-.562 8.466-.566 16.138-.013 30.837-1.555 43.457-6.255 12.395-4.611 22.854-12.319 30.798-24.691l8.234-19.223a2.358 2.358 0 011.142-1.208l82.768-41.018c13.467-4.439 25.786-3.095 35.394 1.807 6.263 3.194 11.383 7.917 14.941 13.54 3.558 5.63 5.551 12.193 5.547 19.045-.003 9.74-4.028 20.07-13.259 29.182l-.275.231c-29.867 21.732-60.188 41.588-90.916 59.639-30.655 18.005-61.664 34.191-92.985 48.641-23.105 14.02-46.244 20.795-69.396 20.679-23.142-.119-46.261-7.132-69.343-20.669l-67.215-34.644a2.398 2.398 0 01-1.301-2.128z"/>
</svg>
);

export default SVG;