import React, { useState } from 'react'
import searchIcon from '../../Assets/search.svg'
import arrowLeft from '../../Assets/arrow_back_ios.svg'
import arrowRight from '../../Assets/arrow_back_ios (1).svg'

function PayRun() {

    const employeeData = [{
        "id": 2 + 1,
        "payrollId": `T${125600 + 2}`,
        "name": `Employee ${2 + 1}`,
        "paidDays": 30,
        "totalSalary": `Rs ${45000 + 2 * 100}`,
        "reimbursement": `Rs ${1000 + 2 * 10}`,
        "paymentMode": 'Bank Transfer',
        "paymentStatus": 2 % 2 === 0 ? 'Paid' : 'Yet to pay',
    }];

    const rowsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(employeeData.length / rowsPerPage);

    const startIndex = (currentPage - 1) * rowsPerPage;
    const paginatedData = employeeData.slice(startIndex, startIndex + rowsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className='px-6 py-4 font-AnekLatin'>
            <div className='bg-[#FFFFFF] p-4'>
                <div className='text-[16px] font-medium'>Payroll</div>
                <div className='text-[12px] text-[#7E7E7E] font-normal mt-2'>Find all employees payroll below</div>
                <div className='mt-6 flex'>
                    <div className='border border-[#D5D5D5] px-6 py-4 rounded-lg'>
                        <div className='text-[12px]'>Period :  01/01/2025 - 31/01/2025</div>
                        <div className='mt-4 flex'>
                            <div className='pt-4 pr-8'>
                                <div className='text-[24px] font-medium text-[#2B2342]'>AED 245625.25</div>
                                <div className='text-[14px] text-[#87898E] mt-2'>PAYROLL COST</div>
                            </div>
                            <div className='pt-4 pl-8 border-l border-[#BDBDBD]'>
                                <div className='text-[24px] font-medium text-[#2B2342]'>AED 145625.25</div>
                                <div className='text-[14px] text-[#87898E] mt-2'>EMPLOYEES NET PAY</div>
                            </div>
                        </div>
                    </div>
                    <div className='ml-4 border border-[#D5D5D5] px-7 py-4 rounded-lg text-center'>
                        <div className='text-[16px] font-medium text-[#868686]'>PAY DAY</div>
                        <div className='text-[24px] text-[#2B2342] font-medium mt-4'>31 Jan 2025</div>
                        <div className='text-[14px] text-[#87898E] mt-4'>400 EMPLOYEES</div>
                    </div>
                    <div className='ml-16 px-7 py-4 rounded-lg text-left'>
                        <div className='text-[16px] font-medium'>Taxes & Deductions</div>
                        <div className='flex mt-4 gap-10'>
                            <div className='text-[14px] font-medium text-[#757575] space-y-2 text-left'>
                                <div>Taxes</div>
                                <div>Pre-Tax Deductions</div>
                                <div>Post-Tax Deductions</div>
                            </div>
                            <div className='text-[14px] font-medium text-[#3A3A3A] space-y-2 text-left'>
                                <div>AED 46512.25</div>
                                <div>AED 1551.82</div>
                                <div>AED 165.12</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#FFFFFF] p-4 mt-2 h-svh'>
                <div className='flex justify-between items-center'>
                    <div className='text-[16px] font-medium'>Employee Summary</div>
                    <div className='flex gap-2'>
                        <div className='border flex items-center px-4 py-[10px] rounded-3xl'>
                            <img src={searchIcon} className='h-[15px] w-[15px]' alt="search" />
                            <input type='text' placeholder='Search employee' className='focus:outline-none text-[12px] ml-2' />
                        </div>
                        <select className='text-[12px] font-medium text-[#393939] border px-6 py-[10px] rounded-3xl focus:outline-none'>
                            <option value='All'>All Status</option>
                            <option value='Active'>Active</option>
                            <option value='Inactive'>Inactive</option>
                        </select>
                    </div>
                </div>

                <div className='mt-8'>
                    <table className='w-full text-[14px] font-normal'>
                        <thead className='bg-[#F8F6FF] rounded-3xl'>
                            <tr>
                                <th className='px-4 py-2 text-left font-medium'>Sl.No</th>
                                <th className='px-4 py-2 text-left font-medium'>Payroll ID</th>
                                <th className='px-4 py-2 text-left font-medium'>Name</th>
                                <th className='px-4 py-2 text-left font-medium'>Paid Days</th>
                                <th className='px-4 py-2 text-left font-medium'>Total Salary</th>
                                <th className='px-4 py-2 text-left font-medium'>Reimbursement</th>
                                <th className='px-4 py-2 text-left font-medium'>Payment Mode</th>
                                <th className='px-4 py-2 text-left font-medium'>Payment Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((emp, index) => (
                                <tr key={emp.id} className='border-b'>
                                    <td className='px-4 py-2'>{startIndex + index + 1}</td>
                                    <td className='px-4 py-2'>{emp.payrollId}</td>
                                    <td className='px-4 py-2'>{emp.name}</td>
                                    <td className='px-4 py-2'>{emp.paidDays}</td>
                                    <td className='px-4 py-2'>{emp.totalSalary}</td>
                                    <td className='px-4 py-2'>{emp.reimbursement}</td>
                                    <td className='px-4 py-2'>{emp.paymentMode}</td>
                                    <td className='px-4 py-2'>{emp.paymentStatus}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-end items-center mt-4 space-x-2">
                    {/* Previous Button */}
                    <button
                        className={`px-3 py-2 rounded ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-300'}`}
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                       <img src={arrowLeft}></img>
                    </button>

                    {/* Page Numbers */}
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index + 1}
                            className={`px-3 py-2 rounded ${currentPage === index + 1 ? 'bg-gray-300' : 'hover:bg-gray-200'}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}

                    {/* Next Button */}
                    <button
                        className={`px-3 py-2 rounded ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-300'}`}
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <img src={arrowRight}></img>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default PayRun
