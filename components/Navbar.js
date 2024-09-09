"use client";

import ModeToggle from "./ThemeButton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function MenubarDemo() {
  return (
    <nav className="p-4 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" text-lg font-bold">
          <Sheet>
            <SheetTrigger>IGCSM</SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex items-center space-x-4">
          
          <div className="hover:animate-pulse hover:underline">
            <DropdownMenu>
              <DropdownMenuTrigger className="hover:underline">Alerts</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Notification</DropdownMenuLabel>
                {/* <DropdownMenuSeparator /> */}
                <DropdownMenuItem>Notification 1</DropdownMenuItem>
                <DropdownMenuItem>Notification 2</DropdownMenuItem>
                <DropdownMenuItem>Notification 3</DropdownMenuItem>
                <DropdownMenuItem>Notification 4</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="hover:animate-pulse">
            <DropdownMenu>
              <DropdownMenuTrigger className="hover:underline">Profile</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
