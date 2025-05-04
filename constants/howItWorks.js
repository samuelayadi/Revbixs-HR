import { FaUser, FaCubes } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import { MdAnalytics } from "react-icons/md";

export const howItWorks = [
  {
    id: 1,
    title: "Create Your Account",
    description: "Sign up and set up your company profile in minutes",
    icon: <FaUser className="text-2xl text-white" />,
  },
  {
    id: 2,
    title: "Configure & Automate",
    description:
      "Customize HR modules and automate workflows",
    icon: <FaCubes className="text-2xl text-white" />,
  },
  {
    id: 3,
    title: "Invite Your Team",
    description:
      "Add employees, assign roles, and collaborate seamlessly",
    icon: <FaHandshakeSimple className="text-2xl text-white" />,
  },
  {
    id: 4,
    title: "Insightful Analytics",
    description:
      "Gain insights on performance, attendance, and engagement",
    icon: <MdAnalytics className="text-2xl text-white" />,
  },
];
