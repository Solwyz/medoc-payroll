import React from 'react';
import Dashboard from '../../Assets/Frame (1).svg';
import RightArrow from '../../Assets/arrow_forward_ios.svg';
import { Link } from 'react-router-dom';
import PayRun from "../../Assets/payments.svg"
import Approval from "../../Assets/Frame (2).svg"
import Form from "../../Assets/lab_profile.svg"
import Settings from "../../Assets/Frame (3).svg"

function Sidebar() {
  return (
    <div className="fixed w-[242px] h-[calc(100vh-72px)] mt-[72px] bg-[#2B2342] px-4 py-4 overflow-y-auto">
      {[
        { name: 'Dashboard', path: 'dashboard',img:Dashboard },
        { name: 'Pay Run', path: "payRun",img:PayRun },
        { name: 'Approval', path:"approval",img:Approval },
        { name:'Form 16',path:"form16",img:Form },
        {name:'Settings', path:"settings",img:Settings },
      
      ].map((item, index) => (
        <Link to={item.path} >
          <div key={index} className="px-4 py-[14px] hover:bg-[#423664] cursor-pointer hover:rounded-lg mt-2">
            <div className="flex items-center justify-between text-[14px] leading-4 font-normal text-white">
              <div className="flex">
                <img className="mr-2" src={item.img} alt="" />
                <h1>{item.name}</h1>
              </div>
              <img className="ml-auto" src={RightArrow} alt="" />
            </div>
          </div>
        </Link>
      ))
      }
    </div >
  );
}

export default Sidebar;
