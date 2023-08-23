import cn from '@/utills/utills';
import * as React from 'react';

export interface IHeadingH2PartProps {
  title1:string,
  title2:string,
  className?:string,
  varient?:string,
}

export default function HeadingH2Part (props: IHeadingH2PartProps) {
  return (
    /* props.varient ?(props.varient === "secondary"?"text-orange-500": "text-offwhite-50"):"text-offwhite-50" */
    <h2 
        className={cn(` text-offwhite-50 text-2xl
        font-bold  `,
        {"text-offwhite-50":props.varient==="primary"},
        {"text-orange-500":props.varient==="secondary"}
        ,`${props.className }` )}
        >
       
        {props.title1}
        <span className={cn("text-orange-500 ml-1", 
        {"text-orange-500":props.varient==="primary"},
        {"text-offwhite-50":props.varient==="secondary"})}>
          {props.title2}
        </span>
        </h2>
  );
}
