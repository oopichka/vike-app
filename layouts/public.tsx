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
import { Separator } from "~/components/ui/separator"
import { cn } from "~/lib/utils"
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
const PublicLayout = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[]
}) => {
  const context = usePageContext()

  // console.log(context);
  return (
    <main className="h-screen w-screen flex flex-row items-center bg-background overflow-hidden">
      <article className="flex-1 flex flex-col h-full relative overflow-auto">
        <Navbar isPrivateView={false} />
        <section className="p-6 flex-1">{children}</section>
        <footer className=" bg-gray-400 text-accent px-40 pb-b flex flex-col">
          <div className="flex flex-row justify-between items-center py-1">
            <img
              src="/static/Icons/android-chrome-512x512.png"
              alt="Isca Logo"
              className={cn("w-[75px]")}
            />
            <div className="flex flex-row gap-5">
              <ul className="flex flex-row gap-0 items-end">
                <li>
                  <Button variant={"link"} className="text-accent py-0" asChild>
                    <a href="">Editorial Board</a>
                  </Button>
                </li>
                <li>
                  <Button variant={"link"} className="text-accent py-0" asChild>
                    <a href="">Copyright</a>
                  </Button>
                </li>
                <li>
                  <Button variant={"link"} className="text-accent py-0" asChild>
                    <a href="">Indexing</a>
                  </Button>
                </li>
                <li>
                  <Button variant={"link"} className="text-accent py-0" asChild>
                    <a href="">IJCA Template</a>
                  </Button>
                </li>
                <li>
                  <Button variant={"link"} className="text-accent py-0" asChild>
                    <a href="">Submission</a>
                  </Button>
                </li>
                <li>
                  <Button variant={"link"} className="text-accent py-0" asChild>
                    <a href="">To Order</a>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-0.5" />
          <div className="flex flex-col items-center gap-1 py-5">
            <p className="text-sm font-medium leading-none">
              ISCA, 278 Mankato Ave. #220, Winona, MN 55987, USA
            </p>
            <p className="text-sm font-medium leading-none">
              Copyright © 2023 International Society for Computers and Their
              Applications (ISCA). All Rights Reserved
            </p>
          </div>
        </footer>
      </article>
    </main>
  )
}

export default PublicLayout
