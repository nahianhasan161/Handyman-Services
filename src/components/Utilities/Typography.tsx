import React from "react";
import HeadingType from "@/helper/enums/HeadingType";
import FontWeight from "@/helper/enums/FontWeight";


type TypographyProps = {
   Type:HeadingType,
   className?:string,
   Description:string,
   

};
const Typography:React.FC<TypographyProps> = ({Type,Description,className}) => {
    
    
    return(
        <>
        {(Type == HeadingType.h1) && (<h1 className={`${ className } font-bold text-md sm:text-lg md:text-xl lg:text-2xl`} > {Description}</h1>)}
        {(Type == HeadingType.h2) && (<h1 className={`${ className } my-3  ml-1 sm:ml-5 md:ml-7 text-xs sm:text:lg md:text-xl font-bold`} > {Description}</h1>)}
        
        </>
    );
}
export default Typography;