// import ISCA_Logo from "@/../static/ISCA-LightMode.svg"

import { Bell, LayoutDashboard, LogOut, User, UserCircle2 } from "lucide-react"

import { Avatar, AvatarFallback } from "~/components/ui/avatar"

import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import Sidebar from "./sidebar"

import React from "react"
import { SearchInput } from "~/components/search_input"

import Link from "~/renderer/Link"
import { usePageContext } from "~/renderer/usePageContext"
import Navbar from "./navbar"
/**
 * DefualtLayout
 * ---------------------------------------------------------
 * @param {React.ReactNode | React.ReactNode[]} children Child components to be rendered.
 * ---------------------------------------------------------
 * - Navbar star-wars
 * ---------------------------------------------------------
 * @returns Page Layout Wrapper.
 */
const PrivateLayout = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[]
}) => {
  const context = usePageContext()

  // console.log(context);
  return (
    <main className="h-screen w-screen flex flex-row items-center bg-background overflow-hidden">
      <Sidebar />

      <article className="flex-1 flex-col h-full relative overflow-auto">
        <Navbar isPrivateView />
        {/* <header className="h-[55px] border-b w-full sticky top-0 bg-background flex flex-row justify-between items-center px-3">
          <div className="flex-1">
            <SearchInput />
          </div>
          <div className="items-center justify-end flex flex-row gap-2 flex-1">
            <Link href="/">Home</Link>
            <Link href="/issues">Issue</Link>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <AvatarFallback className="select-none">
                    <UserCircle2 className=" text-primary-foregroud" />
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>John Doe</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Bell className="mr-2 h-4 w-4" />

                    <span>Notifications</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive hover:bg-destructive/20 focus:bg-destructive/20 hover:text-destructive focus:text-destructiv">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header> */}
        <section className="p-6">{children}</section>
      </article>
    </main>
  )
}

export default PrivateLayout
