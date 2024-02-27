import React, { useState, useEffect } from "react";

export default function Taskbar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []); // Empty dependency array ensures the effect runs only once

  const formatDate = (date) => {
    const options = { month: "2-digit", day: "2-digit", year: "numeric" };
    return date.toLocaleDateString([], options);
  };

  const formatTime = (time) => {
    const options = { hour: "2-digit", minute: "2-digit" };
    return time.toLocaleTimeString([], options);
  };
  return (
    <>
      <div class="fixed bottom-0 flex justify-between w-full h-[3.2rem] bg-neutral-800 border-t-[0.2px] border-neutral-700 select-none pointer-events-auto py-1">
        <div>left</div>
        <div className="flex justify-evenly items-center">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
        <div className="flex justify-center items-center">
          <span className="material-symbols-outlined h-full w-8 flex justify-center items-center rounded-lg rotate-180 hover:bg-neutral-700">
            expand_more
          </span>
          <div className="hover:bg-neutral-700 my-1 h-full flex justify-center items-center rounded-lg px-1">
            <span className="material-symbols-outlined text-lg mx-1">wifi</span>
            <span className="material-symbols-outlined text-xl mx-1">
              volume_up
            </span>
            <span className="material-symbols-outlined text-xl mx-1 rotate-180">
              battery_low
            </span>
          </div>
          <div className="flex justify-center items-center font-semibold text-sm hover:bg-neutral-700 my-1 h-full rounded-lg px-1">
           <div className="flex flex-col items-end">
             <div>{formatTime(currentTime)}</div>
            <div>{formatDate(currentTime)}</div>
            </div>
            <span class="material-symbols-outlined">notifications</span>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
