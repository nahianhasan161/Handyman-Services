import React from "react";
import HeadingType from "@/helper/enums/HeadingType";
import FontWeight from "@/helper/enums/FontWeight";


type TypographyProps = {
   Type:HeadingType,
   Weight?:FontWeight
   Description:string,
   

};
const Typography:React.FC<TypographyProps> = ({Type,Description,Weight}) => {
    
    
    return(
        <>
        {(Type == HeadingType.h1)&& (<h1 className={`${ Weight == FontWeight.base ? FontWeight.base :  FontWeight.bold   } font-bold text-lg sm:text-xl md:text-2xl`} > {Description}</h1>)}
        </>
    );
}
export default Typography;