import { useState } from "react";
import { GiFastBackwardButton } from "react-icons/gi";
import { GiFastForwardButton } from "react-icons/gi";

export function Counter() {
  const [count, setCount] = useState(0);

  const handleCouterP = () => {
    setCount((c) => c - 1);
  };

  const handleCouterS = () => {
    setCount((c) => c + 1);
  };
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="flex flex-col bg-gray-100 px-25 py-10 rounded-2xl shadow-lg" >
      <div className="flex items-center justify-center gap-5">
        <GiFastBackwardButton className="size-10 " onClick={handleCouterP} />
        <span>Count: {count}</span>
        <GiFastForwardButton className="size-10 " onClick={handleCouterS} />
      </div>

        <div>
          <p className="flex flex-col mt-10">
            <span> {count === 0 ? "aujourd'hui c'est " : ""} </span>
            <span>{date.toDateString()}</span>
          </p>
        
      </div>
    </div>
  );
}

export default function CalendarPage() {
  return (
    <div className="bg-gray-500 h-screen items-center flex flex-col justify-center">
      <h3 className="text-4xl font-bold text-center  mb-10">Date Calendar</h3>
      <Counter />
    </div>
  );
}
