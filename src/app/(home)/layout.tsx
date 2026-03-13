"use client";
import CategoryBar from "@/component/CategoryBar";
import Footer from "@/component/Footer";
// import FooterMenu from "@/component/FooterMenu";
import LenisProvider from "@/component/LenisProvider";
import Navbar from "@/component/Navbar";
import TopBar from "@/component/TopBar";
import React, { useEffect } from "react";
// import Lenis from 'lenis'
// import 'lenis/dist/lenis.css'
function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col relative  h-full">
      <div className="">
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
      </div>
      <LenisProvider>
        {children}
        <Footer />
      </LenisProvider>
    </section>
  );
}

export default layout;
