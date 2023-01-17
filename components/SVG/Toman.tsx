import * as React from "react";
import type {FC}from 'react'
type svgProps={
  className:string
  height?:string|number
}
const SvgToman:FC<svgProps> = (props) => (
  <svg
    height={props.height}
    viewBox="0 0 102.968 61.583"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      style={{
        fill: "#000",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.417776,
        strokeOpacity: 1,
      }}
      d="M94.11 0c-7.18 0-14.007.517-20.244 2.421l1.898 6.196C82.91 7.65 90.089 6.539 97.59 6.77l.542-6.723C96.781.018 95.44 0 94.11 0ZM24.205 9.886c-2.329.009-4.713.248-7.008.608l1.204 7.4c2.442-.413 4.725-1.066 7.524-.742l-.12-7.234a32.71 32.71 0 0 0-1.6-.032zm74.34 6.07s-3.966 1.44-6.088 3.03c1.683 3.995 2.408 5.814 3.212 10.3 1.14 6.363-2.444 6.617-4.314 7.223-1.484.481-5.166.882-9.251.512-.346-3.259-.217-3.934-1.006-6.058-2.326-6.259-2.637-7.457-5.37-10.766-2.857-3.462-7.763-4.798-11.79-3.216-2.239.88-4.712 3.035-9.154 12.817-3.404 7.494-6.281 7.348-9.923 7.083.001-5.065-.863-7.27-1.246-10.206s-2.348-9.321-2.348-9.321L34.874 20.3c.489.312 2.494 7.696 3.037 14.065.096 5.78-2.117 9.494-6.53 12.153-4.825 2.908-15.768 2.468-18.826.105-3.38-2.611-5.527-7.038-5.512-10.487.016-3.46 2.637-11.744 2.637-11.744l-5.37-2.983S.452 29.023.142 33.154C-.972 47.997 4.711 50.536 9.68 54.219c4.967 3.683 12.036 3.493 19.173 1.958 7.136-1.535 10.646-4.891 14.379-11.233 5.242.072 9.426-.331 13.516-4.287 5.537 4.634 11.33 4.42 17.927 4.66-1.755 3.136-4.616 4.872-9.155 6.572-4.539 1.7-8.665 2.41-13.373 2.377.948 2.111 1.539 4.758 2.78 7.317 11.056-.28 14.906-2.869 19.445-5.942 6.12-4.142 7.97-10.725 7.74-10.808 0 0 4.189.295 9.051-.82 5.081-1.165 9.677-3.464 10.977-6.851 1.3-3.388.862-5.92.095-10.534-.767-4.614-3.69-10.672-3.69-10.672zM34.874 20.3c-.034-.021-.061-.011-.08.036zm33.044 4.274c4.042-.007 5.516 3.9 6.493 6.016.991 2.15 1.174 6.246 1.174 6.246-4.35.56-12.329-.365-15.53-3.496 2.334-4.507 3.727-8.634 7.669-8.762.065-.002.13-.004.194-.004z"
    />
  </svg>
);
export default SvgToman;
