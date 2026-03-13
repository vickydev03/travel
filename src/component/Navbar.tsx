"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserRoundPen, Menu, Users, ChevronDown, ChevronRight, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { supabase } from "@/utils/supabase";
import { toast } from "sonner";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

function Navbar() {
  const trpc = useTRPC();
  const { user, loading, openLogin, setOpenLogin } = useAuth();
  const { data: users } = useQuery(
    trpc.user.profile.queryOptions(undefined, { enabled: !!user?.email })
  );
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleLogin = () => setOpenLogin(true);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged out successfully");
      setSheetOpen(false);
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    {
      title: "Group Trips",
      url: null,
      icon: <Users className="size-4" />,
      emoji: null,
      subCategary: [
        { title: "International Group Trips", url: "/trips/international-group", icon: null, emoji: "✈️" },
        { title: "Domestic Group Trips", url: "/trips/domestic-group", icon: "/icon/india.png", emoji: null },
      ],
    },
    {
      title: "Deals",
      url: null,
      icon: null,
      emoji: "🏷️",
      subCategary: [
        { title: "New Year Gateways", url: "/deals/new-year", icon: null, emoji: "🔥" },
        { title: "Goa Trip", url: "/deals/goa", icon: null, emoji: "🔥" },
      ],
    },

    {
      title: "Travel Style",
      url: null,
      icon: null,
      emoji: "🧳",
      subCategary: [
        { title: "Weekend Trip", url: "/style/weekend", icon: null, emoji: "🛻" },
        { title: "Spiritual Trips", url: "/style/spiritual", icon: null, emoji: "🧘‍♀️" },
      ],
    },

    {
      title: "Upcoming Group Trips",
      url: "/trips/upcoming",
      icon: null,
      emoji: "🗓️",
      subCategary: null,
    },

    {
      title: "Below 10K",
      url: "/deals/below-10k",
      icon: null,
      emoji: "💸",
      subCategary: null,
    },

    {
      title: "Customised Trips",
      url: null,
      icon: null,
      emoji: "🌏",
      subCategary: [
        { title: "International Trips", url: "/custom/international", icon: null, emoji: "✈️" },
        { title: "Domestic Trips", url: "/custom/domestic", icon: "/icon/india.png", emoji: null },
        { title: "Corporate Trips", url: "/custom/corporate", icon: null, emoji: "🏢" },
      ],
    },
    {
      title: "About Us",
      url: "/about",
      icon: null,
      emoji: "🤵",
      subCategary: null,
    },
  ];

  const toggleItem = (title: string) => {
    setOpenItem((prev) => (prev === title ? null : title));
  };

  return (
    <div className="flex max-w-[90%] mx-auto w-full items-center justify-between bg-transparent md:bg-background">
      {/* Mobile Menu */}
      <div className="mobile-menu md:hidden">
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <button aria-label="Open menu">
              <Menu className="size-5 stroke-white" />
            </button>
          </SheetTrigger>

          <SheetContent side="left" className="w-[300px] p-0 flex flex-col">
            <SheetHeader className="px-5 pt-5 pb-3 border-b">
              <SheetTitle className="text-left text-base font-semibold tracking-wide">
                Menu
              </SheetTitle>
            </SheetHeader>

            {/* Nav Items */}
            <nav className="flex-1 overflow-y-auto py-2">
              {menu.map((item:any) => (
                <div key={item.title}>
                  {item.subCategary ? (
                    <>
                      {/* Expandable item */}
                      <button
                        onClick={() => toggleItem(item.title)}
                        className="flex w-full items-center justify-between px-5 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          {item.emoji && <span className="text-base">{item.emoji}</span>}
                          {item.icon && <span>{item.icon}</span>}
                          {item.title}
                        </span>
                        <ChevronDown
                          className={`size-4 text-muted-foreground transition-transform duration-200 ${
                            openItem === item.title ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Sub items */}
                      {openItem === item.title && (
                        <div className="bg-muted/40 border-l-2 border-primary/30 ml-5">
                          {item.subCategary.map((sub: { title: string; url: string; icon: string | null; emoji: string | null }) => (
                            <Link
                              key={sub.title}
                              href={sub.url || "#"}
                              onClick={() => setSheetOpen(false)}
                              className="flex items-center gap-2 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                            >
                              {sub.emoji && <span className="text-sm">{sub.emoji}</span>}
                              {sub.icon && !sub.emoji && (
                                <Image
                                  src={sub.icon}
                                  alt=""
                                  width={16}
                                  height={16}
                                  className="size-4 object-contain"
                                />
                              )}
                              <span>{sub.title}</span>
                              <ChevronRight className="size-3 ml-auto" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    /* Direct link */
                    <Link
                      href={item.url || "#"}
                      onClick={() => setSheetOpen(false)}
                      className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                    >
                      {item.emoji && <span className="text-base">{item.emoji}</span>}
                      {item.icon && <span>{item.icon ??""}</span>}
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Bottom: Auth + Contact */}
            <div className="border-t px-5 py-4 space-y-3">
              <a
                href="tel:+918120640655"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="size-4" />
                <span>(+91) 8120640655</span>
              </a>

              {!user ? (
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => {
                    setSheetOpen(false);
                    handleLogin();
                  }}
                >
                  Login
                </Button>
              ) : (
                <div className="space-y-2">
                  {users?.role === "ADMIN" && (
                    <Link href="/admin" onClick={() => setSheetOpen(false)}>
                      <Button className="w-full" variant="outline">
                        Admin Panel
                      </Button>
                    </Link>
                  )}
                  <Button className="w-full" variant="destructive" onClick={handleLogout}>
                    Log out
                  </Button>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Logo */}
      <div className="logo">
        <div className="relative">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={100}
            height={100}
            className="object-contain size-18 md:size-24"
          />
        </div>
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-2">
        <div className="text-stone-700 flex items-center gap-2">
          <Phone className="size-5 fill-black" />
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="rounded-full" variant="outline">
                  <UserRoundPen />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {users?.role === "ADMIN" && (
                  <DropdownMenuItem asChild>
                    <Link href="/admin" className="w-full cursor-pointer">
                      Admin Panel
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem asChild>
                  <Button className="w-full" onClick={handleLogout}>
                    Log out
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>

      {/* Mobile Phone Icon */}
      <div className="md:hidden">
        <a href="tel:+918120640655">
          <Phone className="size-5 stroke-white" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;