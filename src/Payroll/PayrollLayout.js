import React from 'react'
import Header from './Sections/Header/Header'
import Sidebar from './Sections/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function PayrollLayout() {
    return (
        <div>
            <Header />
            <div className='flex'>
                <Sidebar />
                
              <div className='ml-[242px] bg-[#EFEFF5] w-full mt-[72px] px-6 py-4'>  <Outlet /></div>
            </div>
        </div>
    )
}

export default PayrollLayout
