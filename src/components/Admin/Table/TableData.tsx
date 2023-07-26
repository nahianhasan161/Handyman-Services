import React from 'react';

type TableDataProps = {
    title:string|number,
    key?:string|number
};

const TableData:React.FC<TableDataProps> = ({title}) => {
    
    return (<>
    <td className='p-1 sm:p-3 md::p-5 max-w-[12rem] '>
        <p> {title}</p>
        </td>
    </>)
}
export default TableData;