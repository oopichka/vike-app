import React from "react"

import { Bell, LayoutDashboard, LogOut, User, UserCircle2 } from "lucide-react"

import { Avatar, AvatarFallback } from "~/components/ui/avatar"

import { SearchInput } from "~/components/search_input"
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
import { cn } from "~/lib/utils"
import Link from "~/renderer/Link"

const Navbar = ({ isPrivateView }: { isPrivateView: boolean }) => {
  return (
    <header
      className={cn(
        "h-[55px] border-b w-full sticky top-0 bg-background flex flex-row justify-between items-center",
        isPrivateView ? "px-3" : "pr-3"
      )}
    >
      <div className="flex-1 flex flex-row items-center">
        {!isPrivateView && (
          <div
            className={cn(
              "mx-3 transition-all ease-linear duration-75 flex items-center justify-center min-w-[59px] min-h-[55px]"
            )}
          >
            <a href="/">
              <img
                src="/static/Icons/android-chrome-512x512.png"
                alt="Isca Logo"
                className={cn(
                  "transition-all ease-linear duration-75 w-[55px]",
                  "w-[45px]"
                )}
              />
            </a>
          </div>
        )}
        <SearchInput />
      </div>
      <div className="items-center justify-end flex flex-row gap-2 flex-1">
        <Button variant={"ghost"} asChild>
          <Link href="/">Home</Link>
        </Button>
        <Button variant={"ghost"} asChild>
          <Link href="/issues">Issue</Link>
        </Button>
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
    </header>
  )
}

export default Navbar
