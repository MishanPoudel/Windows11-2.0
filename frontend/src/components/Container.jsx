import React from "react";

export default function Container() {
  return (
    <>
      <div className="absolute bg-blue-400 top-[10px] h-[1.8em] left-[10px] w-60 rounded-t-lg flex">
        <div className="">
          <div>this iswhat it is</div>
        </div>
        <div class="material-symbols-outlined absolute left-60 hover: h-7 w-8 ml-2 flex justify-center">add</div>
      </div>
      <div className="bg-green-400 w-full h-11">jhsdf</div>
      <div className="bg-blue-400 w-full h-[3.5rem]">jhsdf</div>
      <div className="flex flex-row h-full">
        <div className="bg-yellow-500 border-r-2 w-40 h-full mt-2">
          this is a sidebar
        </div>
        <div className="bg-blue-500 border-0 ml-5 mt-2">
          this is content area
        </div>
      </div>

      <div className="absolute bottom-0 h-5 bg-white w-full text-xs py-1">
        <div className="flex items-center justify-center w-16 border-r-2  h-full">
          5 items
        </div>
      </div>
    </>
  );
}
