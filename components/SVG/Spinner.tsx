import * as React from 'react';

export interface IAppProps {
	percentage?:number
	bgColor:string
	spColor:string
	hidden:boolean
	opacity:string
	dimensions:number
}

export default function Spinner (props: IAppProps) {
  return (
	<div className={`animate-spin ${props.opacity} ${props.hidden?"hidden":""}`}>
	<svg className={`h-${props.dimensions} w-${props.dimensions} `}>
	  <circle
		className={`${props.bgColor} `}
		strokeWidth="2"
		stroke="currentColor"
		fill="transparent"
		r={`${props.dimensions}`}
		cx={`${2*props.dimensions}`}
		cy={`${2*props.dimensions}`}
	  />
	  <circle
		className={`${props.spColor} `}
		strokeWidth="4"
		strokeDasharray={props.dimensions * 2 * Math.PI}
		strokeDashoffset={props.percentage?
		  props.dimensions * 2 * Math.PI * (1 - props.percentage / 100):0
		}
		strokeLinecap="round"
		stroke="currentColor"
		fill="transparent"
		r={`${props.dimensions}`}
		cx={`${2*props.dimensions}`}
		cy={`${2*props.dimensions}`}
	  />
	</svg>
  </div>
  );
}
