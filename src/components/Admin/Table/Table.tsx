import React from 'react';
import TableData from './TableData';
import cn from '@/utills/utills';

type TableProps = {
    titles:Array<string>,
    informations:Array<Array<string|number|boolean>>,
    thClassName?:string,
    trClassName?:string,
    dataType?:Array<string|undefined>,
    isButtonTitle?:boolean,
    varient?:"primary"|"default"|"secondary"
};

const Table:React.FC<TableProps> = ({titles,informations,...props}) => {
    
    
    return (<div className={cn('overflow-x-auto  shadow-c_sm',
                  {
                    "shadow-none" : (props.varient === "secondary") 
                  },
    )}>
        <table className={cn("table-auto border-2 w-full text-[#0E172C] ",
        {
          " border-0" : (props.varient === "secondary") 
        },
        )}>
  <thead className={cn('border-2 bg-[#F0EAEA] ',
    {
      "bg-transparent  border-0 border-b border-offwhite-50/80" : (props.varient === "secondary") 
    },
  )}>
    <tr className='font-bold text-base'>
    {titles && (titles.map((title,index) => <th className={
      cn('text-xs sm:text-base p-1 sm:p-3 md:p-5 ',
      {
        "sm:text-[10px] bg-orange_500/50" : (props.varient === "primary") 
      },
      {
        " bg-transparent text-orange_500 sm:text-base text-base" : (props.varient === "secondary") 
      },
      
      props.thClassName
      )}
       key={index}>
        
      {(props.isButtonTitle && (index === titles.length-1)? 
      <span
       className='bg-orange_500 rounded-full text-white
      py-2 px-7 whitespace-nowrap
      '> {title} </span>
      : title
       ) }
       
       </th>))}
      
    </tr>
  </thead>
  <tbody className={cn('border-2 text-center bg-white  text-xs  ',
  {
    "text-[10px]" : (props.varient === "primary") 
  },
  {
    " bg-transparent border-none sm:text-sm" : (props.varient === "secondary") 
  },
  props.trClassName)}>
  {informations && (informations.map((info,index) => 
  <tr className='' key={index}>
     {info && (info.map((data,id) =>   
     
     <TableData type={props.dataType?.at(id)} title={data} key={id}/>
     
     
     
     ))}
  </tr>
  ))}
   
  </tbody>
</table>
    </div>);
}
export default Table;