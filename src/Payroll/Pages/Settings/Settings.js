import React, { useState } from "react";
import editIcon from "../../Assets/border_color.svg";
import closeIcon from "../../Assets/close.svg"
function Settings() {
  const [isOpen, setIsOpen] = useState(false);
  const [editField, setEditField] = useState("");
  const [location, setLocation] = useState("AllLocations");
  const [employeeType, setEmployeeType] = useState("Permanent");
  const [payrollAdmin, setpayrollAdmin] = useState("Accountsmedoc@mail.com");
  const [includeProfiles, setIncludeProfiles] = useState(false);
  const [enableAccess, setEnableAccess] = useState(true);
  const [syncDatabase, setSyncDatabase] = useState(true);

  const openModal = (field) => {
    setEditField(field);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const handleSave = () => {
    if (editField === "Location") {
      setLocation("New Location"); // Change as needed
    } else if (editField === "Employee Type") {
      setEmployeeType("Contract"); // Change as needed
    } else if (editField === "Payroll Admin") {
      setpayrollAdmin("Employee Name"); // Change as needed
    }
    closeModal();
  };

  return (
    <div className="  h-min-screen h-screen">
      <div className="w-full h-[60px] bg-white item-center text-start px-4 py-[20px] text-base font-normal">
        Medoc-pharma Payrolls
      </div>
      <h2 className="mt-8 text-base font-normal">
        Your Payroll domain name -
        <span className="font-medium">Medoc-Pharma</span>
      </h2>
      <div className="bg-white p-4 shadow rounded mt-8">
        <h2 className="font-normal text-base">Settings</h2>
        <div className="border w-full  mt-2"></div>
        <div className="mt-12 font-normal flex text-sm">
          <p className="text-[#535353]">Payroll admin:</p>
          <span className="ml-[52px] mr-[72px]">{payrollAdmin}</span>
          <button
            onClick={() => openModal("Payroll Admin")}
            className="text-[#B0B0B0] flex font-medium text-sm  hover:underline  "
          >
            Edit <img src={editIcon} className="ml-1" alt="" />
          </button>
        </div>

        <div className="mt-12">
          <h3 className="font-normal text-base">Sync employees whose:</h3>
          <div className="border w-[161px] mt-2"></div>
          <div className="mt-4 text-sm flex">
            <p className="font-medium">Location</p>
            <p className="text-[#898989] ml-[110px]">Contains</p>
            <p className="font-medium ml-6">{location}</p>
            <button
              onClick={() => openModal("Location")}
              className="text-[#B0B0B0] flex font-medium text-sm ml-[55px] hover:underline"
            >
              Edit <img src={editIcon} className="ml-1" alt="" />
            </button>
          </div>
          <div className="mt-4 text-sm flex">
            <p className="font-medium">Employee type</p>
            <p className="text-[#898989] ml-[73px]">Contains</p>
            <p className="font-medium ml-6">{employeeType}</p>
            <button
              onClick={() => openModal("Employee Type")}
              className="text-[#B0B0B0] flex font-medium text-sm ml-[62px] hover:underline"
            >
              Edit <img src={editIcon} className="ml-1" alt="" />
            </button>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-normal text-base">I wish to:</h3>
          <div className="border w-[161px] mt-2"></div>


          <div className="flex font-normal text-sm items-center mt-[18px]">
            <input
              type="checkbox"
              checked={includeProfiles}
              onChange={() => setIncludeProfiles(!includeProfiles)}
              className="mr-2 w-4 h-4"
            />
            <label>
              Include employee profiles (Non users) - Same preferences apply
            </label>
          </div>
          <div className="flex font-normal text-sm items-center mt-[9px]">
            <input
              type="checkbox"
              checked={enableAccess}
              onChange={() => setEnableAccess(!enableAccess)}
              className="mr-2 w-4 h-4"
            />
            <label>
              Enable employees to access Zoho payroll from self-service page
            </label>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-normal text-base">I am done!</h3>
          <div className="border w-[161px] mt-2"></div>


          <div className="flex font-normal text-sm  items-center mt-[18px]">
            <input
              type="checkbox"
              checked={syncDatabase}
              onChange={() => setSyncDatabase(!syncDatabase)}
              className="mr-2 w-4 h-4"
            />
            <label>Sync my employees database with Payroll</label>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8  shadow-lg w-[383px]">
           <div className="flex justify-between"> <h3 className="text-base font-medium text-[#6C55B2]"> {editField}</h3>
           <img src={closeIcon} className="cursor-pointer"  onClick={closeModal} alt="" />
           </div>
            <input
              type="text"
              className="w-full border p-2 mt-8 focus:outline-none"
              defaultValue={editField === "location" ? location : employeeType}
            />
            <div className="mt-[56px] flex justify-end">
              <button
                className="px-4 py-[12px] border border-[#E6E6E7] mr-4 rounded-lg"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-[12px] bg-[#6C55B2] text-white rounded-lg"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;
