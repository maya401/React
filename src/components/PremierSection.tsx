
import Card from "./card";
import type { CardProps } from "./typage/types";
import { BiCalendar, BiUserMinus } from "react-icons/bi";
import { FaFileInvoice } from "react-icons/fa";

const Cards: CardProps[] = [
  {
    title: "Online Billing, Invoicing, & Contracts",
    content:
      "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
    icon: <FaFileInvoice />,
   className:"bg-[#5B72EE]"
  
  },
  {
    title: "Easy Scheduling & Attendance Tracking",
    content:
      "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
    icon: <BiCalendar />,
     className:"bg-[#F48C06]"
    
  },
  {
    title: "Customer Tracking",
    content:
      "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization",
    icon: <BiUserMinus />,
   className:"bg-[#29B9E7]"
   
  },
];

export default function PremierSection() {
  return (
     <div className="my-24 text-center px-4 space-y-12">
      
      <div className="grid md:grid-cols-3 gap-5">
        {Cards.map((card, index) => (
          <Card
            key={index} 
            className={`w-15 h-15 flex items-center justify-center rounded-full text-4xl text-white ${card.className} `}
            title={card.title}
            content={card.content}
            icon={card.icon}
           
          />
        ))}
      </div>
     </div>
  );
}
