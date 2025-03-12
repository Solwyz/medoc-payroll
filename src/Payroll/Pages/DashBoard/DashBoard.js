import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const DashBoard = () => {
  const payrollData = {
    payrollCost: 245625.25,
    netPay: 145625.25,
    totalEmployees: 2000,
    previousPayroll: 5625.25,
    monthlyPayroll: [
      25000, 27000, 22000, 30000, 18000, 26000, 24000, 28000, 26000, 29000,
      27000, 25000,
    ],
    payrollSummary: {
      payment: 24515.3,
      pending: 24515.3,
      paid: 24515.3,
    },
  };

  const barChartData = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ],
    datasets: [
      {
        label: "Total Cost",
        data: payrollData.monthlyPayroll,
        backgroundColor: "#4f46e5",
      },
      {
        label: "Net Pay",
        data: payrollData.monthlyPayroll.map((val) => val * 0.6),
        backgroundColor: "#a78bfa",
      },
    ],
  };

  const doughnutData = {
    labels: ["Payment", "Pending", "Paid"],
    datasets: [
      {
        data: Object.values(payrollData.payrollSummary),
        backgroundColor: ["#f87171", "#facc15", "#4ade80"],
      },
    ],
  };
  
  const doughnutOptions = {
    rotation: -90, // Start from the top
    circumference: 180, // Only show half the circle
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };
  

  return (

    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">PAYROLL COST</p>
          <p className="text-xl font-bold">AED {payrollData.payrollCost.toFixed(2)}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">EMPLOYEES NET PAY</p>
          <p className="text-xl font-bold">AED {payrollData.netPay.toFixed(2)}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">TOTAL PAYROLLS</p>
          <p className="text-xl font-bold">{payrollData.totalEmployees}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">PREVIOUS PAYROLL</p>
          <p className="text-xl font-bold">AED {payrollData.previousPayroll.toFixed(2)}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow col-span-2">
          <p className="text-gray-500 mb-4">PAYROLL COST OVERVIEW</p>
          <Bar data={barChartData} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500 mb-4">PAYROLL SUMMARY</p>
          <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>
      </div>

    </div>
  );
};

export default DashBoard;
