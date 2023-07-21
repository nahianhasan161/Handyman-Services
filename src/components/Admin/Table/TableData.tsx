import React from 'react';

type TableDataProps = {
    title:string|number,
    key?:string|number
};

const TableData:React.FC<TableDataProps> = ({title}) => {
    
    return (<>
    <td className='p-5 max-w-[12rem]'>{title}</td>
    </>)
}
export default TableData;