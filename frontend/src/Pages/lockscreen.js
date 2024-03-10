import React from "react";

function Lockscreen() {
  return (
    <>
      <div
        className="relative bg-black h-screen w-full blur-sm min-h-"
        style={{
          background:
            "url(https://img.wallpapersafari.com/desktop/1440/900/11/85/Ra8DH9.jpg)",
          backgroundSize: "100% 100%",
        }}
      ></div>
      <div className="absolute left-0 top-72 h-screen w-full flex flex-col items-center z-10">
        <div className="avatar">
          <div className="w-36 rounded-full">
            <img
              alt="avatar"
              src="https://avatarfiles.alphacoders.com/858/85858.gif"
            />
          </div>
        </div>
        <div className="my-5 text-3xl text-white">MONKE</div>
        <input
          type="text"
          placeholder="Password"
          className="input bg-opacity-30 w-full max-w-xs focus:outline-none border-[0.5px] border-b-white mt-4"
        />
        <div className="text-white mt-3 text-sm">forgor password</div>
      </div>
    </>
  );
}

export default Lockscreen;
