import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDown, Users } from "lucide-react";

interface subOfsub {
  title: string;
  url: string | null;
  icon: string | null;
  emoji: string | null;
}
import { ChevronUp } from "lucide-react";
interface subMenuType {
  title: string;
  url: string | null;
  icon: React.ReactNode | null;
  emoji: string | null;
  subCategary: null | subOfsub[];
}

function CategoryBar() {
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

  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <div className="flex gap-2  items-center justify-center">
      {menu.map((e) => (
        <DropdownMenu
          key={e.title}
          open={openMenu === e.title}
          onOpenChange={(open) => setOpenMenu(open ? e.title : null)}
        >
          <DropdownMenuTrigger asChild>
            <Button
              variant="secondary"
              className=" focus:outline-none focus:ring-0 bg-transparent hover:bg-transparent flex items-center gap-2 hover:cursor-pointer"
            >
              {e.icon}
              {e.emoji && <span>{e.emoji}</span>}
              <span>{e.title}</span>
              {e.subCategary && (
                <span>
                  {openMenu === e.title ? <ChevronUp /> : <ChevronDown />}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>

          {e.subCategary && (
            <DropdownMenuContent>
              <DropdownMenuGroup>
                {e.subCategary.map((sub) => (
                  <DropdownMenuItem key={sub.title} className="flex gap-2">
                    {sub.emoji && <span>{sub.emoji}</span>}

                    {sub.icon && (
                      <Image src={sub.icon} alt="" width={14} height={14} />
                    )}

                    <span>{sub.title}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          )}
        </DropdownMenu>
      ))}
    </div>
  );
}

export default CategoryBar;
