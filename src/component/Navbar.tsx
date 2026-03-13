"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PhoneCall, Search } from "lucide-react";
import { Phone } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { UserRoundPen } from "lucide-react";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { supabase } from "@/utils/supabase";
import { toast } from "sonner";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { Users } from "lucide-react";
function Navbar() {
  const trpc = useTRPC();
  const { user, loading, openLogin, setOpenLogin } = useAuth();
  const { data: users } = useQuery(trpc.user.profile.queryOptions(undefined, {
    enabled: !!user?.email,
  }));
  console.log(users,"789")
  const pathname = usePathname();
  
  const handleLogin = () => {
    setOpenLogin(true);
  };
  
  const handleLogout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Logout error:", error.message);
    toast.error(error.message)
  } else {
    console.log("User logged out successfully");
    toast.success("logged out successfully")
  }
};

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // 50px threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
      {
        title: "Group Trips",
        url: null,
        icon: <Users />,
        emoji: null,
        subCategary: [
          {
            title: "International Group Trips",
            url: "",
            icon: null,
            emoji: "✈️",
          },
          {
            title: "Domestic Groups Trips",
            url: "",
            icon: "/icon/india.png",
            emoji: null,
          },
        ],
      },
      {
        title: "Deals",
        url: null,
        icon: null,
        emoji: "🏷️",
        subCategary: [
          { title: "New Year Gateways", url: "", icon: null, emoji: "🔥" },
          { title: "Goa Trip", url: "", icon: null, emoji: "🔥" },
        ],
      },
      {
        title: "Travel Style",
        url: null,
        icon: null,
        emoji: "🧳",
        subCategary: [
          { title: "Weakend Trip", url: "", icon: null, emoji: "🛻" },
          { title: "Spritual Trips", url: "", icon: null, emoji: "🧘‍♀️" },
        ],
      },
      {
        title: "Upcoming Group Trips",
        url: "",
        icon: null,
        emoji: "🧳",
        subCategary: null,
      },
      { title: "Below 10K", url: "", icon: null, emoji: "💸", subCategary: null },
      {
        title: "Customised Trips",
        url: null,
        icon: null,
        emoji: "🌏",
        subCategary: [
          { title: "International Trips", url: "", icon: null, emoji: "✈️" },
          {
            title: "Domestic Trips",
            url: "",
            icon: "/icon/india.png",
            emoji: null,
          },
          {
            title: "Corporate Trips",
            url: "",
            icon: null,
            emoji: "🏢",
          },
        ],
      },
      { title: "About Us", url: "", icon: null, emoji: "🤵", subCategary: null },
    ];
  return (
    <div className="flex max-w-[90%] mx-auto w-full items-center justify-between bg-transparent md:bg-background ">

      <div className="mobile-menu md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu className="size-5 stroke-white " />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="logo">
        <div className="relative">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={100}
            height={100}
            className=" object-contain size-18 md:size-24 "
          />
        </div>
      </div>
      {/* <div className=" hidden md:block search-box">
        <div className="border flex gap-2 items-center px-2 py-1 border-stone-400 rounded-full">
          <label htmlFor="search">
            <Search className="text-stone-600 size-6" />
          </label>
          <input
            id="search"
            placeholder="Search your trip..."
            className="
            focus:outline-none
            placeholder:text-stone-600
            placeholder:text-sm
            text-stone-500
            w-full
            h-full
        "
            type="text"
          />
        </div>
      </div> */}
      <div className="hidden md:flex items-center gap-2">
        <div className="text-stone-700 flex items-center gap-2">
          <div>
            <Phone className="size-5 fill-black" />
          </div>
          <p className="font-medium leading-2 tracking-wide">
            <span>(+91) 8120640655</span>
          </p>
        </div>

        <div>
          {!user ? (
            <Button onClick={handleLogin} variant="outline">
              Login
            </Button>
          ) : (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="rounded-full " variant="outline">
                    <UserRoundPen />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    {
                      users?.role === "ADMIN" && (
                        <Link href="/admin" className="w-full">Admin Panel</Link>
                      )
                    }
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button className="w-full" onClick={handleLogout}>Log out</Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>
      </div>

      <div className="md:hidden">
        <p>
          <a href="tel:+918120640655">
            <Phone className="size-5  stroke-white" />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
