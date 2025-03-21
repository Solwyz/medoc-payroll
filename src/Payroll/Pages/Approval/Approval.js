import React, { useState } from 'react';
import SearchIcon from '../../Assets/ApprovalSection/Search Icon.svg';
import CheckedBtn from '../../Assets/ApprovalSection/check_circle.svg';
import RejectedBtn from '../../Assets/ApprovalSection/cancel.svg';

function Approval() {
  const [approvals, setApprovals] = useState([
    { id: 1, employeeId: 'T125622', name: 'Shahid Kapoor', type: 'Travel', date: '10/01/2025', status: '' },
    { id: 2, employeeId: 'T125623', name: 'Deepika Padukone', type: 'Medical', date: '11/01/2025', status: '' }
  ]);

  const handleApprove = (id) => {
    setApprovals(prev => prev.map(app => app.id === id ? { ...app, status: 'Approved' } : app));
  };

  const handleReject = (id) => {
    setApprovals(prev => prev.map(app => app.id === id ? { ...app, status: 'Rejected' } : app));
  };

  return (
    <div>
      <div className='bg-[#FFFFFF] px-4 py-6 min-h-screen'>
        <div className='flex justify-between '>
          <div>
            <h1 className='text-[16px] font-medium'>Approvals</h1>
            <p className='text-[14px] font-normal text-[#7E7E7E]'>Find all approval request below</p>
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
            <thead className='px-[19px] py-4 text-[#403D4C] bg-[#F8F6FF] rounded-lg '>
              <tr>
                <th className='font-normal text-start px-[19px] py-4 rounded-l-lg'>Sl.No</th>
                <th className='font-normal text-start px-[19px] py-4'>Employee ID</th>
                <th className='font-normal text-start px-[19px] py-4'>Name</th>
                <th className='font-normal text-start px-[19px] py-4'>Reimbursement Type</th>
                <th className='font-normal text-start px-[19px] py-4'>Applied Date</th>
                <th className='font-normal text-start px-[19px] py-4 rounded-r-lg'>Action</th>
              </tr>
            </thead>
            <tbody>
              {approvals.map((app, index) => (
                <tr key={app.id} className='border-b'>
                  <td className='font-normal text-start px-[19px] py-4'>{index + 1}</td>
                  <td className='font-normal text-start px-[19px] py-4'>{app.employeeId}</td>
                  <td className='font-normal text-start px-[19px] py-4'>{app.name}</td>
                  <td className='font-normal text-start px-[19px] py-4'>{app.type}</td>
                  <td className='font-normal text-start px-[19px] py-4'>{app.date}</td>
                  <td className='font-normal text-start px-[19px] py-4 flex space-x-[18px]'>
                    <button
                      className={`bg-[#B9FBD1] py-1 px-2 flex items-center rounded-lg hover:bg-[#A6DDBA] text-[#1B9046] ${app.status === 'Rejected' ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={() => handleApprove(app.id)}
                      disabled={app.status === 'Rejected'}
                    >
                      <img className='mr-1' src={CheckedBtn} alt="" />{app.status === 'Approved' ? 'Approved' : 'Approve'}
                    </button>
                    <button
                      className={`bg-[#FBC8C8] py-1 px-2 flex items-center rounded-lg hover:bg-[#E7A9A9] text-[#CD1E1E] ${app.status === 'Approved' ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={() => handleReject(app.id)}
                      disabled={app.status === 'Approved'}
                    >
                      <img className='mr-1' src={RejectedBtn} alt="" />{app.status === 'Rejected' ? 'Rejected' : 'Reject'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Approval;
