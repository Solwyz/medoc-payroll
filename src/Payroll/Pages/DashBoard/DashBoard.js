import React, { useState } from "react";
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
import { hover } from "@testing-library/user-event/dist/hover";

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
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],

    datasets: [
      {
        label: false,
        data: [28, 30, 24, 26, 22, 27, 25, 34, 26, 29, 27, 25],
        backgroundColor: "#A09AE5",
        hoverBackgroundColor: "#66629C",
        borderRadius: 8,
        barThickness: 24,
      },
    ],
  };
  const barOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
          callback: (value) => `AED ${value}K`,
        },
        grid: {
          display: true,
          drawBorder: true,
          borderDash: [0, 5],
        },
      },
    },
    barPercentage: 0.8, // Increases the height of bars
    categoryPercentage: 1, // Adjusts spacing between bars
  };

  const doughnutData = {
    labels: ["Payment", "Pending", "Paid"],
    datasets: [
      {
        data: Object.values(payrollData.payrollSummary),
        backgroundColor: ["#F8B6B6", "#304BA0", "#5975CB"],
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%",
    rotation: -90, // Starts from the top
    circumference: 180, // Half-doughnut
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true, // Hide default tooltip
      },
    },
  };
  const [selectedDate, setSelectedDate] = useState("01 Jan - 31 Jan 2025");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className=" min-h-screen">
      <div className="bg-white border border-[#E5E7EC] flex w-full p-4 h-[60px] text-center items-center space-x-6">
        <h1 className="text-base font-normal">Payrolls</h1>
        <select
          className="bg-[#E5E7EC] font-normal text-xs border border-[#E5E7EC] focus:outline-none p-2 "
          value={selectedDate}
          onChange={handleDateChange}
        >
          <option>01 Jan - 31 Jan 2025</option>
          <option>01 Feb - 28 Feb 2025</option>
          <option>01 Mar - 31 Mar 2025</option>
        </select>
      </div>

      <div className="flex justify-between mt-6">
        <div className="bg-white w-[277px]  rounded-lg px-6 pt-[18px] pb-6 border border-[#E5E7EC">
          <p className="font-medium text-[#3C4C7F] text-base">PAYROLL COST</p>
          <p className="mt-8 font-medium text-xl">
            AED {payrollData.payrollCost.toFixed(2)}
          </p>
        </div>
        <div className="bg-white w-[277px]  rounded-lg px-6 pt-[18px] pb-6 border border-[#E5E7EC]">
          <p className="font-medium text-[#3C4C7F] text-base">
            EMPLOYEES NET PAY
          </p>
          <p className="mt-8 font-medium text-xl">
            AED {payrollData.netPay.toFixed(2)}
          </p>
        </div>
        <div className="bg-white w-[277px]  rounded-lg px-6 pt-[18px] pb-6 border border-[#E5E7EC]">
          <p className="font-medium text-[#3C4C7F] text-base">TOTAL PAYROLLS</p>
          <div className="flex justify-between mt-8 items-center ">
            <p className="font-medium text-xl">{payrollData.totalEmployees}</p>
            <p className="font-medium text-xs text-center text-[#676767] ">
              Total Employees
            </p>
          </div>
        </div>
        <div className="bg-white w-[277px]  rounded-lg px-6 pt-[18px] pb-6 border border-[#E5E7EC]">
          <p className="font-medium text-[#3C4C7F] text-base">
            PREVIOUS PAYROLL
          </p>
          <p className="mt-8 font-medium text-xl">
            AED {payrollData.previousPayroll.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="flex mt-6 justify-between ">
        <div className="bg-white w-[820px] h-[423px] px-6 pt-[56px] pb-10 rounded-lg border border-[#E5E7EC]">
          <p className="font-medium text-[#3C4C7F] text-base">
            PAYROLL COST OVERVIEW
          </p>
          <div className="h-[245px] w-[751px] mt-12  items-center">
            {" "}
            <Bar data={barChartData} options={barOptions} />
          </div>
        </div>
        <div className="bg-white w-[350px] h-[423px] px-6 pt-[56px] pb-10 rounded-lg border border-[#E5E7EC]">
          <p className="font-medium text-[#3C4C7F] text-base">
            PAYROLL SUMMARY
          </p>
          <div className="relative flex items-center mx-auto justify-center mt-6 w-[206px] h-[204px] ">
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
          <div className="mt-6 flex justify-between w-full px-6">
            {Object.keys(payrollData.payrollSummary).map((key, index) => (
              <div key={index} className="text-center">
                {/* Border color applied instead of background color */}
                <div
                  className="rounded-full w-3 h-3  inline-block mr-2"
                  style={{
                    backgroundColor:
                      doughnutData.datasets[0].backgroundColor[index],
                  }}
                ></div>
                <p className="text-xs text-gray-500">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </p>
                <p className="text-sm font-medium text-[#3C4C7F]">
                  AED {payrollData.payrollSummary[key]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
