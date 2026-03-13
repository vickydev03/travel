"use client";
import CategoryBar from "@/component/CategoryBar";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import TopBar from "@/component/TopBar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-2 z-50 ">
        <TopBar />
        <div
          style={{ zIndex: "inherit" }}
          className=" absolute md:relative w-full top-6 md:top-0"
        >
          <Navbar />
        </div>
        {
          <div className="hidden md:block">
            <CategoryBar />
          </div>
        }
      </div>
      {children}
      <Footer/>
    </div>
  );
}

export default layout;
