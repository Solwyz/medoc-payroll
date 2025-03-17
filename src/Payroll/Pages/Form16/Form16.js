import React, { useState } from 'react';
import SearchIcon from '../../Assets/ApprovalSection/Search Icon.svg';

function Form16() {
  const [form16, setform16] = useState([
    { id: 1, employeeId: 'T125622', name: 'Shahid Kapoor', type: 'Travel', date: '10/01/2025', action: 'Download Form 16' },
    { id: 2, employeeId: 'T125623', name: 'Deepika Padukone', type: 'Medical', date: '11/01/2025', action: 'Download Form 16' }
  ]);

 

  return (
    <div>
      <div className='bg-[#FFFFFF] px-4 py-6 min-h-screen'>
        <div className='flex justify-between '>
          <div>
            <h1 className='text-[16px] font-medium'>All Employees</h1>
            <p className='text-[14px] font-normal text-[#7E7E7E] mt-2'>Find all employees form 16 below</p>
          </div>
          <div>
            <div className="border border-[#989898] rounded-full items-center w-[295px] py-[12px]  pl-4 text-[#696A70] flex">
              <img className="mr-6 w-4 h-4" src={SearchIcon} alt="" />
              <input type="text" placeholder="Search employee" className="outline-none w-fit" />
            </div>
          </div>
        </div>
        <div className='mt-10'>
          <table className='w-full text-start text-[14px] font-normal'>
            <thead className='px-[19px] py-4 text-[#403D4C] bg-[#DAD4EC] rounded-lg '>
              <tr>
                <th className='font-normal text-start px-[19px] py-4 rounded-l-lg'>Sl.No</th>
                <th className='font-normal text-start px-[19px] py-4'>Employee ID</th>
                <th className='font-normal text-start px-[19px] py-4'>Name</th>
                <th className='font-normal text-start px-[19px] py-4'>Employement Status</th>
                <th className='font-normal text-start px-[19px] py-4 rounded-r-lg'>Action</th>
              </tr>
            </thead>
            <tbody>
              {form16.map((app, index) => (
                <tr key={app.id} className='border-b'>
                  <td className='font-normal text-start px-[19px] py-4'>{index + 1}</td>
                  <td className='font-normal text-start px-[19px] py-4'>{app.employeeId}</td>
                  <td className='font-normal text-start px-[19px] py-4'>{app.name}</td>
                  <td className='font-normal text-start px-[19px] py-4'>{app.type}</td>
                 <td className='font-normal text-start px-[19px] py-4 flex space-x-[18px] underline text-[#3B3DCF] hover:text-[#0307FF] cursor-pointer'>{app.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Form16;

