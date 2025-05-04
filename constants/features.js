import { RiPieChartFill } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaCalendarDay } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { BsCardChecklist } from "react-icons/bs";

export const features = [
  {
    id: 1,
    title: "Employee Onboarding",
    description:
      " Streamline the process of welcoming new hires, completing paperwork, and assigning training.",
    icon: <BsCardChecklist className="text-2xl text-[#CF2722]" />,
  },
  {
    id: 2,
    title: "Attendance Tracking",
    description:
      "Clock‑in/clock‑out, shift scheduling, and automated timesheets",
    icon: <FaClock className="text-2xl text-[#CF2722]" />,
  },
  {
    id: 3,
    title: "Leave Management",
    description:
      "Request, approve, and track vacations, sick days, and other time off",
    icon: <FaCalendarDay className="text-2xl text-[#CF2722]" />,
  },
  {
    id: 4,
    title: "Payroll & Compensation",
    description:
      "Automated payroll runs, tax calculations, payslips, and direct deposits",
    icon: <BsCurrencyDollar className="text-2xl text-[#CF2722]" />,
  },
  {
    id: 5,
    title: "Performance Reviews",
    description: "360° feedback, goal‑setting, and appraisal workflows.",
    icon: <FaChartLine className="text-2xl text-[#CF2722]" />,
  },
  {
    id: 6,
    title: "Analytics & Reporting",
    description:
      " Dashboards, headcount trends, turnover rates, custom reports.",
    icon: <RiPieChartFill className="text-2xl text-[#CF2722]" />,
  },
];
