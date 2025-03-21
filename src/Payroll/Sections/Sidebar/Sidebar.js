import React from 'react';
import Dashboard from '../../Assets/Frame (1).svg';
import RightArrow from '../../Assets/arrow_forward_ios.svg';
import { Link, useLocation } from 'react-router-dom';
import PayRun from "../../Assets/payments.svg"
import Approval from "../../Assets/Frame (2).svg"
import Form from "../../Assets/lab_profile.svg"
import Settings from "../../Assets/Frame (3).svg"

function Sidebar() {
  const location = useLocation();

  const menuItem = 
  [{ name: 'Dashboard', path: "/dashboard", img: Dashboard },
  { name: 'Pay Run', path: "/payRun", img: PayRun },
  { name: 'Approval', path: "/approval", img: Approval },
  { name: 'Form 16', path: "/form16", img: Form },
  { name: 'Settings', path: "/settings", img: Settings },]

  return (
    <div className="fixed w-[242px] h-[calc(100vh-72px)] mt-[72px] bg-[#2B2342] px-4 py-4 overflow-y-auto">
{menuItem.map((item, index) => {
        const isActive = location.pathname === item.path;

        return (
          <Link to={item.path} key={index} >
            <div  className={`px-4 py-[14px] mt-2 ${isActive ? "bg-[#423664] rounded-full" : "hover:bg-[#423664] hover:rounded-full"}`}>
              <div className="flex items-center justify-between text-[14px] leading-4 font-normal text-white">
                <div className="flex">
                  <img className="mr-2" src={item.img} alt="" />
                  <h1>{item.name}</h1>
                </div>
                <img className="ml-auto" src={RightArrow} alt="" />
              </div>
            </div>
          </Link>
        );
      })}


    </div >
  );
}

export default Sidebar;
