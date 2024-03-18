import React from "react";
import HeaderComponent from "./header";
import FooterComponent from "./footer";

const EcommerceMainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className="h-[50px] items-center flex"><HeaderComponent /></div>
      <div className="h-[calc(100vh-100px)] border-t-2 border-b-2 ">{children}</div>
      <div className="h-[50px] justify-center items-center flex"><FooterComponent /></div>
    </div>
  );
};

export default EcommerceMainLayout;
