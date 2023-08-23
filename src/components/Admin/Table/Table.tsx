import React from 'react';
import TableData from './TableData';
import cn from '@/utills/utills';

type TableProps = {
    titles:Array<string>,
    informations:Array<Array<string|number>>,
    thClassName?:string,
    trClassName?:string,
};

const Table:React.FC<TableProps> = ({titles,informations,...props}) => {
    
    
    return (<div className='overflow-x-auto  box-shadow-bottom'>
        <table className="table-auto border-2 w-full text-[#0E172C]">
  <thead className='border-2 bg-[#F0EAEA] '>
    <tr className='font-bold text-base'>
    {titles && (titles.map((title,index) => <th className={
      cn('text-xs sm:text-base p-1 sm:p-3 md:p-5',
      props.thClassName
      )}
       key={index}>{title}</th>))}
      
    </tr>
  </thead>
  <tbody className={cn('border-2 text-center bg-white  text-xs  ',props.trClassName)}>
  {informations && (informations.map((info,index) => 
  <tr className='' key={index}>
     {info && (info.map((data,id) =>   <TableData title={data} key={id}/>))}
  </tr>
  ))}
   
  </tbody>
</table>
    </div>);
}
export default Table;