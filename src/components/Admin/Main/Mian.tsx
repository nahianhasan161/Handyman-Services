import React from 'react'
import Searchbar from '../SearchBar/SearchBar';
import Table from '../Table/Table';
import LeftBar from "../LeftBar/LeftBar"
type MainProps = {
    
};

const Main:React.FC<MainProps> = () => {
    const titles = ['Address','Phone Number','Email Address','Email Address',]
 const informations = [['Awsome Street Mr. Bones','01987462342','awsome@gmail.com','awsome@gmail.com'],['Awsome Street Mr. Bones','01987462342','awsome@gmail.com'],['The Sliding Mr. Bones','01987462342','shaoyo@gmail.com'],["The Sliding Mr. Bones","0183847593",'shiningstar@gmail.com']] 
  return (
    <div className='space-y-4'>
         
            <div className='mb-3'>
           <Searchbar/>
        </div>
         

            <Table titles={titles} informations={informations}/>


        

      {/*   <div className="overflow-x-auto">
  <table className="table-auto min-w-full divide-y divide-gray-200">
    <thead>
      <tr>
        <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Name
        </th>
        <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Age
        </th>
        <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Email
        </th>
        <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Email
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white">
        <td className="px-6 py-4 whitespace-nowrap">
          John Doe
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          30
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          john.doe@example.com
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          john.doe@example.com
        </td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap">
          Jane Smith
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          28
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          jane.smith@example.com
        </td>
      </tr>
     
    </tbody>
  </table>
</div> */}
        
        </div>
    
  );
}
export default Main;
