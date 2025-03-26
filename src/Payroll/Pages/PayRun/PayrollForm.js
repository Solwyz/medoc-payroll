import React, { useState } from 'react';
import { Link, Links, Navigate } from 'react-router-dom';

function PayrollForm() {
  // State for payroll data
  const [payroll, setPayroll] = useState({
    BasicSalary: '',
    Bonus: '',
    BankAccount: '',
    IFSCCode: '',
    Month: '',
    PayPeriod: '',
    PaymentMethod: '',
  });

  // State for selected employee (you may want to pass this as a prop)
  const [selectedEmployee, setSelectedEmployee] = useState({
    id: 1, // Example ID
    name: 'John Doe', // Example name
  });

  // State for allowances and deductions
  const [allowancesOptions] = useState(['Housing', 'Transport', 'Medical']);
  const [deductionsOptions] = useState(['Tax', 'Insurance']);
  const [selectedAllowances, setSelectedAllowances] = useState({});
  const [selectedDeductions, setSelectedDeductions] = useState({});
  const [allowanceAmounts, setAllowanceAmounts] = useState({});
  const [deductionAmounts, setDeductionAmounts] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayroll((prev) => ({ ...prev, [name]: value }));
  };

  const handleAllowanceChange = (allowance) => {
    setSelectedAllowances((prev) => ({
      ...prev,
      [allowance]: !prev[allowance],
    }));
  };

  const handleDeductionChange = (deduction) => {
    setSelectedDeductions((prev) => ({
      ...prev,
      [deduction]: !prev[deduction],
    }));
  };

  const handleAllowanceAmountChange = (e) => {
    const { name, value } = e.target;
    setAllowanceAmounts((prev) => ({ ...prev, [name]: value }));
  };

  const handleDeductionAmountChange = (e) => {
    const { name, value } = e.target;
    setDeductionAmounts((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Payroll Data:', payroll);
    console.log('Allowances:', allowanceAmounts);
    console.log('Deductions:', deductionAmounts);

    Navigate('/payrun');
  };

  const isFormValid = payroll.BasicSalary && payroll.Month; // Example validation

  return (
    <div className='  bg-white p-6'>
     <div className='flex items-center justify-between py-4'>
          <div className="text-[20px] font-medium ">Create Payroll</div>
          <Link to="/payrun">
                  <button  className="bg-[#2B2342] flex items-center  font-normal text-sm  text-white px-6 py-[14px] rounded-lg">
                    Back
                  </button>
             </Link>
     </div>
    
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex columns-3 gap-10">
          <div>
            <label className="block text-[14px] font-normal mb-2">Employee Name</label>
            <input
              type="text"
              name="DisplayName"
              value={selectedEmployee.name}
              readOnly
              className="border border-gray-300 py-[15px] px-4 w-[251px] rounded-lg"
            />
            <input type="hidden" name="EmployeeName" value={selectedEmployee.id} />
          </div>
          <div>
            <label className="block font-normal text-[14px] mb-2">Basic Salary</label>
            <input
              type="number"
              name="BasicSalary"
              value={payroll.BasicSalary}
              onChange={handleChange}
              className="border border-gray-300 py-[15px] px-4 w-[251px] rounded-lg"
              placeholder="25000"
            />
          </div>
          <div>
            <label className="block font-normal text-[14px] mb-2">Bonus</label>
            <input
              type="number"
              name="Bonus"
              value={payroll.Bonus}
              onChange={handleChange}
              className="border border-gray-300 py-[15px] px-4 w-[251px] rounded-lg"
              placeholder="10000"
            />
          </div>
        </div>
        <div>
          <label className="block font-normal text-[14px] mb-2">Allowances</label>
          <div className="flex columns-3 gap-10 font-normal text-[14px]">
            {allowancesOptions.map((allowance) => (
              <div key={allowance}>
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => handleAllowanceChange(allowance)}
                >
                  <input
                    type="checkbox"
                    checked={selectedAllowances[allowance] || false}
                    readOnly
                  />
                  <span className="ml-2">{allowance}</span>
                </div>
                <input
                  type="number"
                  placeholder="Amount"
                  className="border w-[251px] py-[15px] px-4 rounded-lg focus:outline-none mt-2"
                  name={allowance}
                  value={allowanceAmounts[allowance] || ""}
                  onChange={handleAllowanceAmountChange}
                  disabled={!selectedAllowances[allowance]}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <label className="block font-normal text-[14px] mb-2">Deductions</label>
          <div className="flex columns-3 gap-10 font-normal text-[14px]">
            {deductionsOptions.map((deduction) => (
              <div key={deduction}>
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => handleDeductionChange(deduction)}
                >
                  <input
                    type="checkbox"
                    checked={selectedDeductions[deduction] || false}
                    readOnly
                  />
                  <span className="ml-2">{deduction}</span>
                </div>
                <input
                  type="number"
                  placeholder="Amount"
                  className="border w-[251px] py-[15px] px-4 rounded-lg focus:outline-none mt-2"
                  name={deduction}
                  value={deductionAmounts[deduction] || ""}
                  onChange={handleDeductionAmountChange}
                  disabled={!selectedDeductions[deduction]}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <label className="block font-normal text-[14px] mb-2">Bank Account</label>
            <input
              type="text"
              name="BankAccount"
              value={payroll.BankAccount}
              onChange={handleChange}
              className="border border-gray-300 py-[15px] px-4 w-[542px] rounded-lg"
              placeholder="9992 2563 2541 7895"
            />
          </div>
          <div>
            <label className="block font-normal text-[14px] mb-2">IFSC Code</label>
            <input
              type="text"
              name="IFSCCode"
              value={payroll.IFSCCode}
              onChange={handleChange}
              className="border border-gray-300 py-[15px] px-4 w-[251px] rounded-lg"
              placeholder="AGGB256178"
            />
          </div>
        </div>
        <div className="flex columns-3 gap-10">
          <div>
            <label className="block text-[14px] font-normal mb-2">Month</label>
            <input
              type="text"
              name="Month"
              value={payroll.Month}
              onChange={handleChange}
              className="border border-gray-300 py-[12px] px-4 w-[251px] rounded-lg"
              placeholder="Month"
            />
          </div>
          <div>
            <label className="block font-normal text-[14px] mb-2">Pay Period</label>
            <select
              name="PayPeriod"
              value={payroll.PayPeriod}
              onChange={handleChange}
              className="border border-gray-300 py-[15px] px-4 w-[251px] rounded-lg"
            >
              <option value="">Select Pay Period</option>
              <option value="MONTHLY">Monthly</option>
              <option value="WEEKLY">Weekly</option>
            </select>
          </div>
          <div>
            <label className="block font-normal text-[14px] mb-2">Payment Method</label>
            <select
              name="PaymentMethod"
              value={payroll.PaymentMethod}
              onChange={handleChange}
              className="border border-gray-300 py-[15px] px-4 w-[251px] rounded-lg"
            >
              <option value="">Select Payment Method</option>
              <option value="CASH">CASH</option>
              <option value="CHEQUE">CHEQUE</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          disabled={!isFormValid}
          className={`bg-[#2B2342] text-white py-4 px-6 rounded-lg ${!isFormValid ? "opacity-80 cursor-not-allowed" : ""
            }`}
        >
          Save Payroll
        </button>
      </form>
    </div>
  );
}

export default PayrollForm;