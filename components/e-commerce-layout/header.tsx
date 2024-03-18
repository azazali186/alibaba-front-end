import React from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
const HeaderComponent = () => {
  return (
    <div className="px-2 flex w-[100%] justify-between">
      <div className="pl-10 gap-5 flex justify-center items-center">
        <span>Logo</span>
        <span>Name</span>
      </div>
      <div className="gap-5 flex justify-center items-center">
        <span className="w-[40px] h-[40px] flex justify-center items-center border-2 border-blue-300 p-2 rounded-full">
          <NotificationsActiveIcon className="w-[20px] h-[20px] text-blue-500" />
        </span>
        <span className="w-[40px] h-[40px] flex justify-center items-center border-2 border-blue-300 p-2 rounded-full">
          <NotificationsActiveIcon className="w-[20px] h-[20px] text-blue-500" />
          <span className="absolute top-[2px] border-2 border-blue-300 rounded-full text-[10px] px-[4px] right-[66px]">4</span>
        </span>
        <span className="w-[40px] h-[40px] flex justify-center items-center border-2 border-blue-300 p-2 rounded-full">
          <NotificationsActiveIcon className="w-[20px] h-[20px] text-blue-500" />
          <span className="absolute top-[2px] border-2 border-blue-300 rounded-full text-[10px] px-[4px] right-[126px]">4</span>
        </span>
        <span className="w-[40px] h-[40px] flex justify-center items-center border-2 border-blue-300 p-2 rounded-full">
          <NotificationsActiveIcon className="w-[20px] h-[20px] text-blue-500" />
          <span className="absolute top-[2px] border-2 border-blue-300 rounded-full text-[10px] px-[4px] right-[186px]">4</span>
        </span>
        <span className="w-[40px] h-[40px] flex justify-center items-center border-2 border-blue-300 p-2 rounded-full">
          <NotificationsActiveIcon className="w-[20px] h-[20px] text-blue-500" />
          <span className="absolute top-[2px] border-2 border-blue-300 rounded-full text-[10px] px-[4px] right-[246px]">4</span>
        </span>
      </div>
    </div>
  );
};

export default HeaderComponent;
