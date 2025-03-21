import React from 'react'
import searchIcon from '../../Assets/search.svg'

function PayRun() {
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

            <div className='bg-[#FFFFFF] p-4 mt-2'>
                <div className='flex justify-between'>
                    <div className='text-[16px] font-medium'>Employee Summary</div>
                    <div className='flex gap-2'>
                        <div className='border flex items-center justify-center gap-6 px-4 py-[10px] rounded-3xl'>
                            <div>
                                <img src={searchIcon} className='h-[15px] w-[15px]'></img>
                            </div>
                            <div>
                                <input
                                    type='text'
                                    placeholder='Search employee'
                                    className='focus:outline-none text-[12px]'>
                                </input>
                            </div>
                        </div>
                        <select className='text-[12px] font-medium text-[#393939] border px-6 py-[10px] rounded-3xl focus:outline-none'>
                            <option value='All'>All Status</option>
                            <option value='Active'>Active</option>
                            <option value='Inactive'>Inactive</option>
                        </select>
                    </div>
                </div>

                <div className='mt-8'>
                    <table className="w-full ">
                    <thead className="bg-[#F8F6FF] px-6 py-4 border border-[#DAD4EC] rounded-lg">
                                    <tr className='rounded-lg'>
                                        <th className="p-3 font-medium text-center text-sm">Product Name</th>
                                        <th className="p-3 font-medium text-center text-sm">Category</th>
                                        <th className="p-3 font-medium text-center text-sm">Stock Quantity</th>
                                        <th className="p-3 font-medium text-center text-sm">Payment Mode</th>
                                        <th className="p-3 font-medium text-center text-sm">Date</th>
                                        <th className="p-3 font-medium text-center text-sm">Supplier</th>
                                        <th className="p-3 font-medium text-center text-sm">Total amount</th>
                                        <th className="p-3 font-medium text-center text-sm">Status</th>
                                        <th className="p-3 font-medium text-center text-sm">Purchase Order ID</th>
                                    </tr>
                                </thead>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default PayRun
